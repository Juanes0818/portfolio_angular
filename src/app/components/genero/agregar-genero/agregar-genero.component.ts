import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from '../../../clases/genero';
import { GeneroService } from '../../../services/videojuego/genero.service';

@Component({
  selector: 'app-agregar-genero',
  templateUrl: './agregar-genero.component.html',
  styleUrls: ['./agregar-genero.component.css']
})
export class AgregarGeneroComponent implements OnInit{
  genero = new Genero(0, '', '');
  constructor(private generoService: GeneroService, private router: Router){ }

  ngOnInit(): void {  }

  agregar(){
    const formData = new FormData();
    formData.append('descripcion', this.genero.gen_descripcion);
    formData.append('estado', this.genero.gen_estado);

    this.generoService.agregar(formData).subscribe(resultado => {
      if (resultado !== "Nuevo resgistro guardado") {
        alert('Error al insertar informacion');
      } else {
        this.router.navigate(['/portfolio_angular/Master/generos']);
      }
    });

  }
}
