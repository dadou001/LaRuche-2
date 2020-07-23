
// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// LIBS
import { MaterialModule } from '@laruche/shared/vendors';

// SOFT-EDITOR
import { SoftEditorComponent } from './soft-editor.component';
import { BorderCardDirective } from './soft-editor-border.directive';
import { KeyboardDirective } from './soft-editor-keyboard.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialModule,
    ],
    declarations: [
        SoftEditorComponent,
        BorderCardDirective,
        KeyboardDirective,
    ],
    bootstrap: [ SoftEditorComponent ],
    exports: [
        SoftEditorComponent,
      ]
})
export class SoftEditorModule { }