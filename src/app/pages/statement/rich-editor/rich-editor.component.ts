import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import Quill from 'quill';
import { QuillModules } from 'ngx-quill';

@Component({
    selector: 'app-rich-editor',
    templateUrl: 'rich-editor.component.html',
    styleUrls: ['rich-editor.component.scss']
})
export class RichEditorComponent {
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

    onCreateEditor(quill: Quill) {
        this.quill = quill;
    }

    insertComponent() {
    }


}
