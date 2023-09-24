import { Component, OnInit } from '@angular/core';
import { Juego } from '../../../clases/juego';
import { JuegoService } from '../../../services/videojuego/juego.service';
import { Router } from '@angular/router';
import { Genero } from '../../../clases/genero';
import { GeneroService } from '../../../services/videojuego/genero.service';

@Component({
  selector: 'app-agregar-juego',
  templateUrl: './agregar-juego.component.html',
  styleUrls: ['./agregar-juego.component.css']
})
export class AgregarJuegoComponent implements OnInit{
  juego = new Juego(0, '', '', 0, '', '');
  constructor(private juegoService: JuegoService, private router: Router, private generoService: GeneroService){ }

  generos: Genero[] = [];

  ngOnInit(): void{ 
    this.cargarGeneros();
  }

  cargarGeneros(){
    this.generoService.obtenerGenero().subscribe(generos => this.generos = generos);
  }

  agregar(){
    const formData = new FormData();
    formData.append('nombre', this.juego.vid_nombre);
    formData.append('descripcion', this.juego.vid_descripcion);
    formData.append('precio', this.juego.vid_precio.toString());
    formData.append('estado', this.juego.vid_estado);
    formData.append('genero', this.juego.gen_descripcion.toString());

    this.juegoService.agregar(formData).subscribe(resultado => {
      if (resultado !== "Nuevo resgistro guardado") {
        alert('Error al insertar informacion');
      } else {
        this.router.navigate(['/portfolio_angular/Master/videojuegos']);
      }
    });
  }
}
