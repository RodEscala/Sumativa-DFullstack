import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class DataProductosService {

  private jsonUrl = 'https://rodescala.github.io/productosJson/productos.json'
  private listCarrito: Producto[] = [];

  constructor( private http: HttpClient) { }


  public getData(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.jsonUrl)
  }





}
