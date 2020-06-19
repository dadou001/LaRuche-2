// Angular Imports
import { NgModule } from '@angular/core';

import { StatementComponent } from './statement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AngularSplitModule } from 'angular-split';
import { QuillModule } from 'ngx-quill';
import { RichEditorComponent } from './rich-editor/rich-editor.component';

const routes: Routes = [
    { path: '', component: StatementComponent }
];

@NgModule({
    imports: [
        SharedModule,
        QuillModule,
        AngularSplitModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        StatementComponent,
        RichEditorComponent,
    ]
})
export class StatementModule {}
