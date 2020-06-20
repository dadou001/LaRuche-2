import { Component, ViewChild } from '@angular/core';
import { Fragment, FragmentPickerComponent, FragmentService } from '@laruche/fragments';

@Component({
    selector: 'app-preparation',
    templateUrl: 'preparation.component.html',
    styleUrls: ['preparation.component.scss']
})
export class PreparationComponent {

    @ViewChild(FragmentPickerComponent) picker: FragmentPickerComponent;

    readonly fragments = this.service.fragments;
    readonly activeFragment = this.service.onFocusFragment;

    constructor(
        private readonly service: FragmentService
    ) {}

    focusFragment(fragment: Fragment) {
        this.service.focusFragment(fragment);
    }

    removeFragment(fragment: Fragment) {
        this.service.removeFragment(fragment);
    }

    renameFragment(fragment: Fragment) {
        this.service.removeFragment(fragment);
    }

    createFragment() {
        this.picker.open(this.service.randomFragmentId());
    }

}
