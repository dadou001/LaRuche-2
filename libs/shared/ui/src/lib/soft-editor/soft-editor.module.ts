
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

// DRAG-DROP
import { DropDirective } from './soft-editor-drop.directive';
import { DragDirective } from './soft-editor-drag.directive';
import { ContenteditableDirective } from './contenteditable.directive';

const API = [
    SoftEditorComponent,
    DropDirective,
    DragDirective,
    ContenteditableDirective
    
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    declarations: [
        BorderCardDirective,
        KeyboardDirective,
        ...API
    ],
    bootstrap: [ SoftEditorComponent ],
    exports: API
})
export class SoftEditorModule { }
