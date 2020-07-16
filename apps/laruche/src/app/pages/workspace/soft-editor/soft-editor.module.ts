
// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// LIBS
import { MaterialModule } from '@laruche/shared/vendors';
import { FeatureFragmentModule } from '@laruche/feature/fragment';

// SOFT-EDITOR
import { SoftEditorComponent } from './soft-editor.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialModule,
        FeatureFragmentModule,
    ],
    declarations: [
        SoftEditorComponent
    ]
})
export class SoftEditorModule { }