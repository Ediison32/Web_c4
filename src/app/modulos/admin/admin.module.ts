import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateComponent } from './usuarios/create/create.component';
import { EditComponent } from './usuarios/edit/edit.component';
import { GetComponent } from './usuarios/get/get.component';
import { DeleteComponent } from './usuarios/delete/delete.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
