// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// VENDORS
import { QuillModule } from 'ngx-quill';
import { AngularSplitModule } from 'angular-split';

// LIBS
import { MaterialModule } from '@laruche/shared/vendors';
import { FeatureFragmentModule } from '@laruche/feature/fragment';

// MODULE
import { StatementComponent } from './statement/statement.component';
import { WorkspaceComponent } from './workspace.component';
import { PreparationComponent } from './preparation/preparation.component';

const routes: Routes = [
    { path: '', component: WorkspaceComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),

        QuillModule,
        MaterialModule,
        FeatureFragmentModule,
        AngularSplitModule,
    ],
    declarations: [
        WorkspaceComponent,
        StatementComponent,
        PreparationComponent,
    ]
})
export class WorkspaceModule {}
