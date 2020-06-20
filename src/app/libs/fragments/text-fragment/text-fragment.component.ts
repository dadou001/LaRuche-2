import { Component, Inject } from '@angular/core';
import { FRAGMENT, DefineFragment } from '../fragment';
import { TextFragment } from './text-fragment.model';

@Component({
    selector: 'app-text-fragment',
    templateUrl: 'text-fragment.component.html',
    styleUrls: ['text-fragment.component.scss']
})
@DefineFragment({
    name: 'Text',
    constructor: TextFragment,
    description: '...',
})
export class TextFragmentComponent {
    constructor(
        @Inject(FRAGMENT)
        readonly fragment: TextFragment
    ) {}
}
