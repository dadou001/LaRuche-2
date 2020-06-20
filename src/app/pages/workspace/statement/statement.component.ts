import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FragmentService, FragmentPickerComponent, Fragment, FragmentBlot } from '@laruche/fragments';
import { QuillModules } from 'ngx-quill';
import Quill from 'quill';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-statement',
    templateUrl: 'statement.component.html',
    styleUrls: ['statement.component.scss']
})
export class StatementComponent implements OnInit, OnDestroy {

    @ViewChild(FragmentPickerComponent) picker: FragmentPickerComponent;

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

    ngOnInit() {
        this.subscriptions.push(this.fragments.onRemoveFragment.subscribe(e => {
            this.onRemoveFragment(e);
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(e => e.unsubscribe());
    }

    onCreateEditor(quill: Quill) {
        this.quill = quill;
    }

    /**
     * Handles dom changes inside the editor container.
     *
     * This method will detect variable deletion and remove it from
     * the context if all of it references are deleted.
     * @param records changes of the dom.
     */
    onChangeEditorNodes(records: MutationRecord[]): void {
        if (!this.quill) {
            return;
        }
        records.forEach(mutation => {
            const nodes = Array.from(mutation.removedNodes);
            nodes.forEach(e => {
                const node = e as HTMLElement;
                if (node.className === 'quill-fragment') {
                    const id = node.getAttribute('data-fragment');
                    // find references to the fragment inside the quill node.
                    const refs = this.quill.root.querySelectorAll(
                        `[data-fragment='${id}']`
                    );

                    if (!refs.length) { // no more instance left inside the quill editor
                        this.fragments.removeFragmentById(id);
                    }
                }
            });
        });
    }

    async createFragment() {
        const quill = this.quill;

        let id = this.fragments.randomFragmentId();
        quill.focus();
        const selection = quill.getSelection();
        if (selection.length) {
            id = quill.getText(selection.index, selection.length).trim();
        }
        id = id.trim();

        const fragment = this.fragments.findFragment(id) || await this.picker.open(
            id
        );

        if (fragment) {
            quill.deleteText(selection.index, selection.length);
            quill.insertEmbed(selection.index, FragmentBlot.name, fragment);
            quill.insertText(0, '');
            const newSelection = quill.getSelection().index + fragment.id.length;
            quill.setSelection(newSelection, 0);
        }
    }

    private onRemoveFragment(fragment: Fragment) {
        const dom = this.quill.root;
        const nodes = dom.querySelectorAll(`[data-fragment='${fragment.id}']`);
        // unwrap
        nodes.forEach((node: HTMLElement) => {
            // get the element's parent node
            const parent = node.parentNode;
            /* // move all children out of the element
            while (node.firstChild) {
                parent.insertBefore(node.firstChild, node);
            }
            // remove the empty element
            parent.removeChild(node); */

            const newNode = document.createElement('span');
            newNode.textContent = fragment.id;
            parent.replaceChild(newNode, node);
        });
    }

}
