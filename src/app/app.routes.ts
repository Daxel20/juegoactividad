import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';
import { Error404Component } from './pages/error404/error404.component';
import { ContactosComponent } from './pages/contactos/contactos.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'productos',component:ProductosComponent},
    {path:'contactos',component:ContactosComponent},
    {path:'productos-detalles/:idProductos',component:DetallesProductoComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'**',component:Error404Component}
];
