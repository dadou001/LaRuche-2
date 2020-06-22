import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ui-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit {
    @Input()
    title!: string;
    @Input()
    message!: string;
    @Input()
    button!: string;


    constructor(
        private readonly route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        const data = this.route.snapshot.data || {};

        this.title = this.title || data.emptyTitle;
        this.message = this.message || data.emptyMessage;
    }
}
