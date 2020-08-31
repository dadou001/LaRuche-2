// ANGULAR
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule, DragDrop } from '@angular/cdk/drag-drop';

// LIBS
import { MaterialModule } from '@laruche/shared/vendors';
import { SharedUiEmptyStateModule } from '@laruche/shared/ui';
import { SoftEditorModule } from '@laruche/shared/ui';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgArrayPipesModule } from 'ngx-pipes';


import { FRAGMENT_DEFINITION, listFragmentDefinitions } from './fragment';
import { FragmentListComponent } from './components/fragment-list/fragment-list.component';
import { FragmentPickerComponent } from './components/fragment-picker/fragment-picker.component';
import { TextFragmentModule } from './providers/text-fragment/text-fragment.module';
import { NumberFragmentModule } from './providers/number-fragment/number-fragment.module';


@NgModule({
    declarations: [
        FragmentListComponent,
        FragmentPickerComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MaterialModule,
        SharedUiEmptyStateModule,
        SoftEditorModule,
        SweetAlert2Module,
        NgArrayPipesModule,
        DragDropModule,
    ],
    exports: [
        FragmentListComponent,
        FragmentPickerComponent,

        TextFragmentModule,
        NumberFragmentModule,

    ]
})
export class FeatureFragmentModule {
    static forRoot(): ModuleWithProviders<FeatureFragmentModule> {
        return {
            ngModule: FeatureFragmentModule,
            providers: [
                 { provide: FRAGMENT_DEFINITION, useFactory: () => listFragmentDefinitions() }
            ]
        };
    }
}

