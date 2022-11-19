import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutasRoutingModule } from './rutas-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { CreateComponent } from './create/create.component';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    DeleteComponent,
    CreateComponent,
    GetComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    RutasRoutingModule
  ]
})
export class RutasModule { }
