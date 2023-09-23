import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaJuegoComponent } from './components/videojuego/vista-juego/vista-juego.component';
import { AgregarJuegoComponent } from './components/videojuego/agregar-juego/agregar-juego.component';
import { EditarJuegoComponent } from './components/videojuego/editar-juego/editar-juego.component';
import { AgregarGeneroComponent } from './components/genero/agregar-genero/agregar-genero.component';
import { EditarGeneroComponent } from './components/genero/editar-genero/editar-genero.component';
import { VistaGeneroComponent } from './components/genero/vista-genero/vista-genero.component';
import { NavbarComponent } from './components/plantilla/navbar/navbar.component';
import { HomeComponent } from './components/plantilla/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaJuegoComponent,
    AgregarJuegoComponent,
    EditarJuegoComponent,
    AgregarGeneroComponent,
    EditarGeneroComponent,
    VistaGeneroComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
