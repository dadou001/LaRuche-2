import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@laruche/shared/vendors';
import { TextFragmentComponent } from './text-fragment.component';

@NgModule({
    declarations: [TextFragmentComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    exports: [TextFragmentComponent]
})
export class TextFragmentModule {}
