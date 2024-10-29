import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Root = Root2[]

export interface Root2 {
  id: number
  nombre: string
  usuario: string
  descripcion: string
  carrera: string
  imagen: string
}




@Injectable({
  providedIn: 'root'
})
export class ApiConsumoService {
  private url='https://apimocha.com/duocker/post'

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<Root>{
    return this.http.get<Root>(this.url)
  }
}
