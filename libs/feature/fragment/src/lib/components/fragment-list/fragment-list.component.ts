import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fragment } from '../../fragment';

@Component({
    selector: 'fragment-list',
    templateUrl: 'fragment-list.component.html',
    styleUrls: ['fragment-list.component.scss']
})
export class FragmentListComponent {
    @Input() fragments: Fragment[];
    @Output() active = new EventEmitter<Fragment>();
    @Output() rename = new EventEmitter<Fragment>();
    @Output() remove = new EventEmitter<Fragment>();

    trackBy(_: number, item: Fragment) {
        return item.id;
    }
}
