import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { Juego } from 'src/app/clases/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  url = 'https://apivideojuego.000webhostapp.com/ApiVideojuego/public/api';
  constructor(private http: HttpClient) { }

  obtenerJuegos(): Observable<any>{
    return this.http.get(`${this.url}/videojuego`);
  }

  obtenerDonde(id: number): Observable<any>{
    return this.http.get(`${this.url}/videojuego/${id}`);
  }

  eliminar(id: number): Observable<any>{
    return this.http.delete(`${this.url}/videojuego/eliminar/${id}`);
  }

  agregar(juego: FormData): Observable<any>{
    return this.http.post(`${this.url}/videojuego/nuevo`, juego);
  }

  editar(id: number, juego: FormData): Observable<any>{
    return this.http.post(`${this.url}/videojuego/modificar/${id}`, juego);
  }

}
