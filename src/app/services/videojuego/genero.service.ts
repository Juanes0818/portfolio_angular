import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs"
import { Genero } from 'src/app/clases/genero';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  url = 'https://apivideojuego.000webhostapp.com/ApiVideojuego/public/api';
  constructor(private http: HttpClient) { }

  obtenerGenero(): Observable<any>{
    return this.http.get(`${this.url}/genero`);
  }

  obtenerDonde(id: number): Observable<any>{
    return this.http.get(`${this.url}/genero/${id}`);
  }

  eliminar(id: number): Observable<any>{
    return this.http.delete(`${this.url}/genero/eliminar/${id}`);
  }

  agregar(genero: FormData): Observable<any>{
    return this.http.post(`${this.url}/genero/nuevo`, genero);
  }

  editar(id: number, genero: FormData): Observable<any>{
    return this.http.post(`${this.url}/genero/modificar/${id}`, genero);
  }
}
