import { Component } from '@angular/core';
import { FragmentService } from '@laruche/fragments';
import { QuillModules } from 'ngx-quill';
import Quill from 'quill';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-statement',
    templateUrl: 'statement.component.html',
    styleUrls: ['statement.component.scss']
})
export class StatementComponent {
    private readonly subscriptions: Subscription[] = [];
    private quill: Quill;
    private quillContent: any;

    modules: QuillModules = {
        formula: true,
    };

    get content() {
        return this.quillContent;
    }

    set content(value: any) {
        this.quillContent = value;
    }

    constructor(
        private readonly fragments: FragmentService
    ) {}

    onCreateEditor(quill: Quill) {
        this.quill = quill;
    }

    createFragment() {
        this.fragments.createFragment(this.fragments.definitions[0]);
    }

}
