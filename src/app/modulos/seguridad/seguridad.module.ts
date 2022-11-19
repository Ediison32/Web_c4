import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RecoverKeyComponent } from './recover-key/recover-key.component';
import { OffComponent } from './off/off.component';


@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    RecoverKeyComponent,
    OffComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
