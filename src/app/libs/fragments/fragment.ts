import { InjectionToken } from '@angular/core';
import { ComponentType, ComponentPortal } from '@angular/cdk/portal';

/**
 * Object passed to the constructor of the fragment classes.
 */
export interface FragmentConstructorArgs {
    /** Unique identifier of the fragment.
     *  The id of the fragment is used as a variable name.
     */
    id: string;
    /** Reference to the component that renders the view of the fragment. */
    component: ComponentPortal<any>;
}

/**
 * Representation of a dynamic part of an exercise.
 */
export interface Fragment extends FragmentConstructorArgs {
    value?: () => any;
}

/**
 * Metadata information about a fragment.
 */
export interface FragmentDefinition {
    /** name of the fragment. */
    name: string;
    /** Type of the component that render an instance of the fragment. */
    component: ComponentType<any>;
    /** Constructor of the fragment. */
    constructor: any;
    /** Brief description of the fragment. */
    description: string;
}

/**
 * Base class of the fragments.
 */
export abstract class BaseFragment implements Fragment {
    id: string;
    component: ComponentPortal<any>;

    constructor(args: FragmentConstructorArgs) {
        this.id = args.id;
        this.component = args.component;
    }
}

/**
 * Token passed as an argument to the component that render a fragment.
 *
 * @example```ts
 * ＠Component({
 *    ...
 * })
 * ＠FragmentInfo({
 *    ...
 * })
 * export class MyComponent {
 *      construuctor(
 *          ＠Inject(FRAGMENT) fragment: Fragment
 *      ) {}
 * }
 * ```
 */
export const FRAGMENT = new InjectionToken<Fragment>('FRAGMENT');

/**
 * Token to get the list of defined frsagments.
 */
export const FRAGMENT_DEFINITION = new InjectionToken<FragmentDefinition>('FRAGMENT_DEFINITION');

const REGISTRY = 'LaRucheFragments';

/**
 * Gets the list (a copy) of the defined fragments.
 */
export function listFragmentDefinitions(): FragmentDefinition[] {
    document[REGISTRY] = document[REGISTRY] || [];
    return document[REGISTRY].slice();
}

/**
 * Decorator used to define a new fragment.
 * @param definition The metadata informations about the fragment.
 */
export function DefineFragment(definition: Omit<FragmentDefinition, 'component'>): ClassDecorator {
    // tslint:disable-next-line: only-arrow-functions
    return function(target: any) {
        document[REGISTRY] = document[REGISTRY] || [];
        document[REGISTRY].push({
            ...definition,
            component: target
        });
        return target;
    };
}
