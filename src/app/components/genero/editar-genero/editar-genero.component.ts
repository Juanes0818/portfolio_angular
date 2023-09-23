import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Genero } from '../../../clases/genero';
import { GeneroService } from '../../../services/videojuego/genero.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit{
  genero = new Genero(0, '', '');
  constructor(private router:Router, private generoService: GeneroService, private params: ActivatedRoute){}

  ngOnInit(): void {
    let idString = this.params.snapshot.paramMap.get('id');
    let id = idString ? parseInt(idString) : 0; // Usar 0 como valor predeterminado si 'idString' es nulo
    this.generoService.obtenerDonde(id).subscribe(genero => this.genero = genero[0]);
  }
  
  editar(generoForm: NgForm) {
    if (generoForm.valid) {
       const formData = new FormData();
       formData.append('id', this.genero.gen_id.toString()); // Agregar el ID a FormData
       formData.append('descripcion', this.genero.gen_descripcion);
       formData.append('estado', this.genero.gen_estado);
 
       this.generoService.editar(this.genero.gen_id, formData).subscribe(resultado => {
          if (resultado !== "Resgistro modificado") {
             alert('Ocurrió un error o la información no ha sufrido cambios');
          } else {
             this.router.navigate(['/Master/generos']);
          }
       });
    }
 }
 
}
