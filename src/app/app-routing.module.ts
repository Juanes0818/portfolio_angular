import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaJuegoComponent } from './components/videojuego/vista-juego/vista-juego.component';
import { AgregarJuegoComponent } from './components/videojuego/agregar-juego/agregar-juego.component';
import { EditarJuegoComponent } from './components/videojuego/editar-juego/editar-juego.component';
import { NavbarComponent } from './components/plantilla/navbar/navbar.component';
import { AgregarGeneroComponent } from './components/genero/agregar-genero/agregar-genero.component';
import { EditarGeneroComponent } from './components/genero/editar-genero/editar-genero.component';
import { VistaGeneroComponent } from './components/genero/vista-genero/vista-genero.component';
import { HomeComponent } from './components/plantilla/home/home.component';

const routes: Routes = [

  {path: '', redirectTo: 'Master', pathMatch: 'full'},

  {path: 'Master', component: NavbarComponent, children:[
    
    {path:'', component:HomeComponent},
    {path:'videojuegos', component:VistaJuegoComponent},
    {path:'agregar_juego', component:AgregarJuegoComponent},
    {path:'editar_juego/:id', component:EditarJuegoComponent},
    {path:'generos', component:VistaGeneroComponent},
    {path:'agregar_genero', component:AgregarGeneroComponent},
    {path:'editar_genero/:id', component:EditarGeneroComponent}

  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
