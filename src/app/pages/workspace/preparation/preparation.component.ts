import { Component } from '@angular/core';
import { Fragment, FragmentService } from '@laruche/fragments';

@Component({
    selector: 'app-preparation',
    templateUrl: 'preparation.component.html',
    styleUrls: ['preparation.component.scss']
})
export class PreparationComponent {

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

    createHiddenFragment() {
        this.service.createFragment(this.service.definitions[0]);
    }

}
