import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../../services/videojuego/juego.service';
import { Juego } from '../../../clases/juego';
import { Router, ActivatedRoute } from '@angular/router';
import { Genero } from '../../../clases/genero';
import { GeneroService } from '../../../services/videojuego/genero.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-juego',
  templateUrl: './editar-juego.component.html',
  styleUrls: ['./editar-juego.component.css']
})
export class EditarJuegoComponent implements OnInit{
  juego = new Juego(0, '', '', 0, '', '');
  constructor(private router:Router, private juegoService:JuegoService, private params: ActivatedRoute, private generoService: GeneroService){}

  generos: Genero[] = [];

  ngOnInit(): void {
    this.cargarGeneros();

    let idString = this.params.snapshot.paramMap.get('id');
    let id = idString ? parseInt(idString) : 0; // Usar 0 como valor predeterminado si 'idString' es nulo
    this.juegoService.obtenerDonde(id).subscribe(juego => this.juego = juego[0]);
  }

  cargarGeneros(){
    this.generoService.obtenerGenero().subscribe(generos => this.generos = generos);
  }

  editar(juegoForm: NgForm){
    if (juegoForm.valid) {
      const formData = new FormData();
       formData.append('id', this.juego.vid_id.toString()); // Agregar el ID a FormData
       formData.append('nombre', this.juego.vid_nombre);
       formData.append('descripcion', this.juego.vid_descripcion);
       formData.append('precio', this.juego.vid_precio.toString());
       formData.append('estado', this.juego.vid_estado);
       formData.append('genero', this.juego.gen_descripcion);

       this.juegoService.editar(this.juego.vid_id, formData).subscribe(resultado => {
        if (resultado !== "Resgistro modificado") {
          alert('Ocurrio un error o la informacion no ha sufrido cambios');
        }
        else{
          this.router.navigate(['/Master/videojuegos']);
        }
      });
    }
  }
}
