import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

import { FragmentDefinition, Fragment } from '../../fragment';
import { FragmentService } from '../../fragment.service';

/**
 * Presents a view inside a modal window that allow to pick a fragment.
 */
@Component({
    selector: 'fragment-picker',
    templateUrl: 'fragment-picker.component.html',
    styleUrls: ['fragment-picker.component.scss'],
})
export class FragmentPickerComponent implements OnInit {
    @ViewChild(SwalComponent) swal: SwalComponent;

    /** current selected fragment. */
    selection?: FragmentDefinition;

    /** registered fragments metadatas */
    definitions = this.fragments.definitions;

    form = new FormGroup({
        id: new FormControl('', Validators.compose([
            Validators.required,
            this.fragments.fragmentIdentifierValidator(),
            this.fragments.fragmentIdentifierUniqueValidator()
        ]))
    });

    constructor(private readonly fragments: FragmentService) {}

    ngOnInit() {
        if (this.definitions.length) {
            this.selection = this.definitions[0];
        }
    }

    /**
     * Dismiss the picker with the current selection.
     */
    async done() {
        await this.swal.dismiss({
            isConfirmed: true,
            isDismissed: false,
            value: this.selection,
        });
    }

    /**
     * Opens the picker to select a fragment.
     * @param id The identifier to give to the picked fragment.
     * @returns A promise that resolves with a `Fragment` object
     *  if the user select a fragment or `undefined`.
     */
    async open(id: string): Promise<Fragment|undefined> {
        this.form.patchValue({
            id
        });

        const result = await this.swal.fire();
        let fragment: Fragment | undefined;

        if (result.value) {
            fragment = this.fragments.createFragment(
                this.form.value.id,
                result.value
            );
        }

        return fragment;
    }

    trackBy(_: number, item: FragmentDefinition) {
        return item.name;
    }

}

export declare type FragmentPickerHandler = (
    fragment: Fragment | undefined
) => void | Promise<void>;
