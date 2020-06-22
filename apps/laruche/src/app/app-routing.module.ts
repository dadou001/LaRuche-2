import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'metadata', loadChildren: () => import('./pages/metadata/metadata.module').then(m => m.MetadataModule) },
    { path: 'workspace', loadChildren: () => import('./pages/workspace/workspace.module').then(m => m.WorkspaceModule) },
    { path: '**', redirectTo: 'workspace', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
