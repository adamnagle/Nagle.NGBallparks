import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Stadium1Component } from './stadium1/stadium1.component';

const routes: Routes = [
  { path: '', redirectTo: '/stadium1', pathMatch: 'full'},
  { path: 'stadium1', component: Stadium1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
