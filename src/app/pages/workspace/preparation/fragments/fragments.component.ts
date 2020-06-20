import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fragment } from '@laruche/fragments';

@Component({
    selector: 'app-fragments',
    templateUrl: 'fragments.component.html',
    styleUrls: ['fragments.component.scss']
})
export class FragmentsComponent {
    @Input() fragments: Fragment[];
    @Output() active = new EventEmitter<Fragment>();
    @Output() rename = new EventEmitter<Fragment>();
    @Output() remove = new EventEmitter<Fragment>();

    trackBy(_: number, item: Fragment) {
        return item.id;
    }
}
