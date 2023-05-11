import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StadiumsComponent } from './stadiums/stadiums.component';

const routes: Routes = [
  { path: '', redirectTo: '/stadiums', pathMatch: 'full'},
  { path: 'stadiums', component: StadiumsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
