import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'mydashboard', component: DashboradComponent},
  { path: '', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
