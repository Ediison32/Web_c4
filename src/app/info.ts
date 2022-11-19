// ng generate component assets/navbar  ---> genera componentes 

// ng g component assets/footer    --->


//ng g component assets/index --->> pagina principal 


//ng g component assets/error  --- > es para los errores 


//asiciar los componentes creados como el de, footerm, index etc
// usamos la sigiente informacion en "  app.component.html  "

//<app-navbar></app-navbar>   -----> este me indica poner barra de navegacion
//<router-outlet></router-outlet> ---->
//<app-footer></app-footer> ----->  


//Agregamos los módulos necesarios para el funcionamiento:
//ng generate module modulos/seguridad --routing -- > configuracion (modulos son seciones especificas)
//ng generate module modulos/admin --routing    --- >


// generamos modulos para cara entdidad 
//  
//ng generate module modulos/Rutas --routing
//ng generate module modulos/Aeropuertos --routing
//ng generate module modulos/Vuelos --routing


//Seguridad:
//ng g component modulos/seguridad/login --->         Login
//ng g component modulos/seguridad/cambiar_clave -->  Change_Password
//ng g component modulos/seguridad/recuperar_clave --> Recover_Key
//ng g component modulos/seguridad/cerrar_sesion -->   Sign_off

/*
Gestion de Usuarios:
ng g component modulos/admin/usuarios/create
ng g component modulos/admin/usuarios/edit
ng g component modulos/admin/usuarios/get



Por cada Entidad específica, por ejemplo Estaciones (para cada entidad):
ng g component modulos//create
ng g component modulos/estaciones/edit
ng g component modulos/estaciones/get


* libreria de Css   ---->  npm install materialize-css@next




*/