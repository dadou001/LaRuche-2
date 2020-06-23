import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { FragmentService, FragmentPickerComponent, Fragment, FragmentBlot } from '@laruche/feature/fragment';
import { QuillModules } from 'ngx-quill';
import { Subscription } from 'rxjs';
import Quill from 'quill';


@Component({
    selector: 'app-statement',
    templateUrl: 'statement.component.html',
    styleUrls: ['statement.component.scss']
})
export class StatementComponent implements OnInit, OnDestroy {

    @ViewChild(FragmentPickerComponent) picker: FragmentPickerComponent;

    private readonly subscriptions: Subscription[] = [];

    private quill: Quill;
    private quillContent: any = `
    <b>Enoncé</b>:<br/>
    Sur une planète extra-solaire, une masse m = 27 kg est attachée à une corde et reste immobile.
    Calculer la norme de la tension de la corde. On supposera que l'accélération de la pesanteur a pour valeur g = 8.5 m.s\(^{-2}\)
    <br/><br/>

    Tension de la corde T = __________ N<br/><br/>

    <b>Préparation</b> :<br/>
    Tirage au hasard de m (réel) = (entier entre 200 et 300) / 10
    Tirage au hasard de g (réel) = (entier entre 20 et 150) / 10
    Calcul de T (réel) = m * g<br/><br/>

    <b>Analyse</b> :<br/>
    La réponse de l'étudiant est numérique (réel)
    `;

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

    /**
     * Creates a `Fragment` object from the current selected text inside the quill editor.
     * - if the user selection correspond to an exising fragment id, then the fragment will be reused.
     * - otherwise this method will create a new fragment with an id set to the selected text.
     */
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
        nodes.forEach((node: HTMLElement) => {
            const parent = node.parentNode;
            const newNode = document.createElement('span');
            newNode.textContent = fragment.id;
            parent.replaceChild(newNode, node);
        });
    }

}
