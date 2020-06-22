import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    readonly pages = [
        { title: 'Entête', index: 0, link: './metadata', icon: 'bookmark' },
        { title: 'Énoncé', index: 1, link: './workspace', icon: 'text_fields' },
        // { title: 'Préparation', index: 1, link: './preparation', icon: 'build' },
        // { title: 'Analyse', index: 2, link: './analysis', icon: 'check_circle' },
        // { title: 'Code', index: 3, link: './output', icon: 'code' },
    ];
}
