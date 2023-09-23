import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../../services/videojuego/juego.service';
import { Juego } from '../../../clases/juego';

@Component({
  selector: 'app-vista-juego',
  templateUrl: './vista-juego.component.html',
  styleUrls: ['./vista-juego.component.css']
})
export class VistaJuegoComponent implements OnInit{
  juegos: Juego[] = [];

  constructor(private juegoService: JuegoService){}

  ngOnInit(): void { 
    this.cargarJuegos();
  }

  cargarJuegos(){
    this.juegoService.obtenerJuegos().subscribe(juegos => this.juegos = juegos);
  }

  eliminar(id: number){
    this.juegoService.eliminar(id).subscribe(resultado =>{
      if(resultado !== "Resgistro eliminado"){
        alert('Ocurrio un error al eliminar el registro');
      }
      this.cargarJuegos();
    });
  }
}
