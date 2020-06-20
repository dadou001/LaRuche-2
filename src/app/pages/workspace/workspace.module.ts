// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// VENDORS
import { QuillModule } from 'ngx-quill';
import { AngularSplitModule } from 'angular-split';

// LIBS
import { MaterialModule } from '@laruche/vendors';

// MODULE
import { StatementComponent } from './statement/statement.component';
import { WorkspaceComponent } from './workspace.component';
import { PreparationComponent } from './preparation/preparation.component';
import { FragmentsComponent } from './preparation/fragments/fragments.component';

const routes: Routes = [
    { path: '', component: WorkspaceComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),

        QuillModule,
        MaterialModule,
        AngularSplitModule,
    ],
    declarations: [
        WorkspaceComponent,
        StatementComponent,
        FragmentsComponent,
        PreparationComponent,
    ]
})
export class WorkspaceModule {}
