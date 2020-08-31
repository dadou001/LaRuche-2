import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fragment } from '../../fragment';

@Component({
    selector: 'fragment-list',
    templateUrl: 'fragment-list.component.html',
    styleUrls: ['fragment-list.component.scss']
})
export class FragmentListComponent implements OnInit {
    @Input() fragments: Fragment[];

    @Output() active = new EventEmitter<Fragment>();
    @Output() rename = new EventEmitter<Fragment>();
    @Output() remove = new EventEmitter<Fragment>();


    ngOnInit() {
        document.addEventListener('focusFragment', (e: CustomEvent) => {
            this.setActive(e.detail.id);
        })
    }
    trackBy(_: number, item: Fragment) {
        return item.id;
    }

    setActive(id: string) {
        this.fragments.forEach(e => {
            if (e.id === id) {
                this.active.next(e);
            }
            return true;
        })
    }
}
