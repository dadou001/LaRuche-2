// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetadataComponent } from './metadata.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: MetadataComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MetadataComponent,
    ],
    exports: [
        MetadataComponent,
    ]
})
export class MetadataModule {}
