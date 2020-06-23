import { Component, Inject } from '@angular/core';
import { FRAGMENT, DefineFragment } from '../../fragment';
import { TextFragment } from './text-fragment';

@Component({
    selector: 'fragment-text',
    templateUrl: 'text-fragment.component.html',
    styleUrls: ['text-fragment.component.scss']
})
@DefineFragment({
    name: 'Text',
    constructor: TextFragment,
    description: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Saepe doloremque quis ipsa corrupti voluptate sequi,
    consequatur odio voluptatum optio totam iste eius?
    Cum corporis consequatur nihil impedit atque unde quae?
    `,
})
export class TextFragmentComponent {
    constructor(
        @Inject(FRAGMENT)
        readonly fragment: TextFragment
    ) {}
}
