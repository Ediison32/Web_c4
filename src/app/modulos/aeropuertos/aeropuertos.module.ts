import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AeropuertosRoutingModule } from './aeropuertos-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    AeropuertosRoutingModule
  ]
})
export class AeropuertosModule { }
