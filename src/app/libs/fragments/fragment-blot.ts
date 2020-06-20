import * as Parchment from 'parchment';
import Quill from 'quill';
import { Fragment } from './fragment';

const BlockEmbed: typeof Parchment.default.Embed = Quill.import('blots/embed');
export class FragmentBlot extends BlockEmbed {

    static readonly tagName = 'fragment'; // TODO change to span after fixing https://github.com/quilljs/quill/issues/2110
    static readonly blotName = 'FragmentBlot';

    static create(fragment: Fragment): Element {
        if (!fragment.id) {
            return super.create(fragment) as Element;
        }
        const node = super.create(fragment) as Element;
        node.setAttribute('class', 'quill-fragment');
        node.setAttribute('data-fragment', fragment.id.trim());

        const img = document.createElement('img');
        img.src = fragment.definition.icon;
        img.width = 24;
        img.height = 24;
        node.appendChild(img);

        const span = document.createElement('span');
        span.textContent = fragment.id.trim();
        node.appendChild(span);

        return node;
    }

    static value(node: Element) {
        return {
            name: node.getAttribute('data-variable'),
        };
    }
}

Quill.register(FragmentBlot);
