import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffComponent } from './off/off.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "logout",
    component: OffComponent,
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
