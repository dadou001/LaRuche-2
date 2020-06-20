// tslint:disable: variable-name

import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Fragment, FragmentDefinition, FRAGMENT_DEFINITION, FRAGMENT, FragmentConstructorArgs } from './fragment';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Service that handle fragments.
 */
@Injectable({providedIn: 'root'})
export class FragmentService {
    private readonly _identifierPattern = /^[a-zA-Z_][a-zA-Z_0-9]*$/;

    private readonly _fragments = new BehaviorSubject<Fragment[]>([]);
    private readonly _activeFragment = new BehaviorSubject<Fragment|undefined>(undefined);
    private readonly _onCreateFragment = new Subject<Fragment>();
    private readonly _onRemoveFragment = new Subject<Fragment>();

    /**
     * An observable of the fragments defined in the current exercise.
     */
    get fragments(): Observable<Fragment[]> {
        return this._fragments.asObservable();
    }

    /**
     *
     */
    get definitions(): FragmentDefinition[] {
        return this.injector.get<FragmentDefinition[]>(
            FRAGMENT_DEFINITION
        ).slice();
    }

    /**
     * Current active fragment inside the preparation area of the editor.
     */
    get onFocusFragment(): Observable<Fragment|undefined> {
        return this._activeFragment.asObservable();
    }

    /**
     * Events that emits when a fragment is add to the exercise.
     */
    get onCreateFragment(): Observable<Fragment> {
        return this._onCreateFragment.asObservable();
    }

    /**
     * Events that emits when a fragment is removed from the exercise.
     */
    get onRemoveFragment(): Observable<Fragment> {
        return this._onRemoveFragment.asObservable();
    }

    constructor(
        private readonly injector: Injector
    ) {}

    /**
     * Gives the focus to the given fragment inside the `preparation` area.
     * @param fragment The fragment to focus.
     */
    focusFragment(fragment: Fragment|undefined) {
        this._activeFragment.next(fragment);
    }

    /**
     * Finds the fragment identifier by the given `id`.
     * @param id The id of the fragment to find.
     */
    findFragment(id: string): Fragment|undefined {
        return this._fragments.value.find(e => e.id === id);
    }

    /**
     * Creates a new instance of a fragment for the given metadata
     * and add it to the list of fragments of the exercise.
     * @param id Identifier to give to the created fragment.
     * @param definition Metadata informations about the fragment to create.
     * @throws {ReferenceError} if any of the argument is null
     * @throws {InvalidFragmentIdentifierError} if id is not a valid identifier name.
     * @throws {DuplicatedFragmentIdentifierError} if id is already used.
     * @returns The created fragment.
     */
    createFragment(id: string, definition: FragmentDefinition): Fragment {
        if (id == null || !id.trim()) {
            throw new ReferenceError('Argument "id" is required');
        }

        if (definition == null) {
            throw new ReferenceError('Argument "definition" is required');
        }

        id = id.trim();
        if (!id.match(this._identifierPattern)) {
            throw new InvalidFragmentIdentifierError(id);
        }

        for (const e of this._fragments.value) {
            if (e.id === id) {
                throw new DuplicatedFragmentIdentifierError(id);
            }
        }

        const component = new ComponentPortal(
            definition.component,
            null,
        );

        const fragment = new definition.constructor({
            id,
            component,
            definition
        } as FragmentConstructorArgs);

        const tokens = new WeakMap();
        tokens.set(FRAGMENT, fragment);
        component.injector = new PortalInjector(this.injector, tokens);

        const current = this._fragments.value;
        current.push(fragment);
        this._fragments.next(current);

        this._onCreateFragment.next(fragment);

        return fragment;
    }

    /**
     * Removes the given fragment from the exercise.
     * @param fragment The fragment to remove from the exercise.
     */
    removeFragment(fragment: Fragment) {
        const active = this._activeFragment.value;
        if (active?.id === fragment.id) {
            this.focusFragment(undefined);
        }

        const fragments = this._fragments.value;
        this._fragments.next(
            fragments.filter(e => {
                if (e.id === fragment.id) {
                    this._onRemoveFragment.next(fragment);
                    return false;
                }
                return true;
            })
        );
    }

    /**
     * Removes the fragment identified by `id` if it exists.
     * @param fragment The id of the fragment to remove.
     */
    removeFragmentById(id: string) {
        const fragment = this.findFragment(id);
        if (fragment) {
            this.removeFragment(fragment);
        }
    }

    /**
     * Gets a random unused fragment identifier.
     */
    randomFragmentId() {
        const fragments = this._fragments.value;
        const regex = new RegExp('^fragment(\\d+)$');
        let nextSuffix = 1;
        for (const fragment of fragments) {
            const match = fragment.id.match(regex);
            if (match) {
                const suffix = Number.parseInt(match[1], 10);
                if (suffix >= nextSuffix) {
                    nextSuffix = suffix + 1;
                }
            }
        }
        return 'fragment' + nextSuffix;
    }

    fragmentIdentifierValidator(): ValidatorFn {
        return (control: AbstractControl) => {
            const value: string = control.value;
            if (!value) {
                return null;
            }
            if (!value.match(this._identifierPattern)) {
                return  {
                    invalidFragmentIdentifier: { value }
                };
            }
            return null;
        };
    }

    fragmentIdentifierUniqueValidator(): ValidatorFn {
      return (control: AbstractControl) => {
            const value: string = control.value;
            if (!value) {
                return null;
            }
            if (this.findFragment(value.trim()) != null) {
                return  {
                    duplicatedFragmentIdentifier: { value }
                };
            }
            return null;
        };
    }
}


export class InvalidFragmentIdentifierError extends Error {
    constructor(id: string) {
        super(`"${id}" cannot be resolved to a fragment identifier.`);
    }
}

export class DuplicatedFragmentIdentifierError extends Error {
    constructor(id: string) {
        super(`"${id}" is already used as a fragment identifier.`);
    }
}
