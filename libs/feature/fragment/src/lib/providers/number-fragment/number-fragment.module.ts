import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@laruche/shared/vendors';
import { NumberFragmentComponent } from './number-fragment.component';

@NgModule({
    declarations: [NumberFragmentComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    exports: [NumberFragmentComponent]
})
export class NumberFragmentModule {
}
