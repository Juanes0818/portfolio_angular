import { Component, OnInit } from '@angular/core';
import { GeneroService } from '../../../services/videojuego/genero.service';
import { Genero } from '../../../clases/genero';

@Component({
  selector: 'app-vista-genero',
  templateUrl: './vista-genero.component.html',
  styleUrls: ['./vista-genero.component.css']
})
export class VistaGeneroComponent implements OnInit{
  generos: Genero[] = [];

  constructor(private generoService: GeneroService){}

  ngOnInit(): void { 
    this.cargarGeneros();
  }

  cargarGeneros(){
    this.generoService.obtenerGenero().subscribe(generos => this.generos = generos);
  }

  eliminar(id: number){
    this.generoService.eliminar(id).subscribe(resultado =>{
      if(resultado !== "Resgistro eliminado"){
        alert('Ocurrio un error al eliminar el registro');
      }
      this.cargarGeneros();
    });
  }
}
