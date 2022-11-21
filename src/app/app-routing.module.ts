
// aqui ponemos todos los enrutamientos de la pagina 


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  },
  //----------------->
  // carga perezosa, modulos hijos 
  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
    
  },{
    path: 'vuelos',
    loadChildren: () => import('./modulos/vuelos/vuelos.module').then(m => m.VuelosModule)
  },{
    path: 'admin',
    loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule)  // se trae todo lo que esta en esta ruta 
  },{
    path: 'rutas',
    loadChildren: () => import('./modulos/rutas/rutas.module').then(m => m.RutasModule)
  },{
    path: 'aeropuertos',
    loadChildren: () => import('./modulos/aeropuertos/aeropuertos.module').then(m => m.AeropuertosModule),
    
  },

 //------------------->




  {
    path: '',  // el path es lo que vamos a mostrar en la url 
    pathMatch: 'full',
    redirectTo: '/index'
  },
  {
    path: 'error',
    component: ErrorComponent, // es el componente especifico que le voy a mostrar al usuario
  },{
    path: '**',  // los " **" significa cualquier cosa diferente de..-->
    redirectTo: '/error' // ---> redicciones a  " error" en este caso 
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }