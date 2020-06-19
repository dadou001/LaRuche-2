import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'statement', loadChildren: () => import('./pages/statement/statement.module').then(m => m.StatementModule) },
    { path: '**', redirectTo: 'statement', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
