import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@laruche/shared/vendors';
import { SoftEditorModule } from '@laruche/shared/ui';
import { NumberFragmentComponent } from './number-fragment.component';

@NgModule({
    declarations: [NumberFragmentComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        SoftEditorModule,
    ],
    exports: [NumberFragmentComponent]
})
export class NumberFragmentModule {
}
