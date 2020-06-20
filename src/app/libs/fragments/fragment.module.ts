
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TextFragmentModule } from './text-fragment/text-fragment.module';
import { FRAGMENT_DEFINITION, listFragmentDefinitions } from './fragment';

@NgModule()
export class FragmentModule {
    static forRoot(): ModuleWithProviders<FragmentModule> {
        return {
            ngModule: TextFragmentModule,
            providers: [
                 { provide: FRAGMENT_DEFINITION, useFactory: () => listFragmentDefinitions() }
            ]
        };
    }
}

