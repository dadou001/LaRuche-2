// tslint:disable: variable-name

import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Fragment, FragmentDefinition, FRAGMENT_DEFINITION, FRAGMENT, FragmentConstructorArgs } from './fragment';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';

/**
 * Service that handle fragments.
 */
@Injectable({providedIn: 'root'})
export class FragmentService {

    private readonly _fragments = new BehaviorSubject<Fragment[]>([]);
    private readonly _activeFragment = new BehaviorSubject<Fragment|undefined>(undefined);
    private readonly _onCreateFragment = new Subject<Fragment>();
    private readonly _onRemoveFragment = new Subject<Fragment>();

    private nextId = 0;

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
     * Creates a new instance of a fragment for the given metadata
     * and add it to the list of fragments of the exercise.
     * @param definition Metadata informations about the fragment to create.
     * @returns The created fragment.
     */
    createFragment(definition: FragmentDefinition): Fragment {
        const component = new ComponentPortal(
            definition.component,
            null,
        );

        const fragment = new definition.constructor({
            id: 'Fragment#' + ++this.nextId,
            component
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

}
