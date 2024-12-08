import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataProductosService } from '../../services/data-productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { CarritoListService } from '../../services/carrito-list.service';
import { HeaderComponent } from "../header/header.component";




@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HeaderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  productos: Producto[] = [];

  isLoading = false;

  constructor(
    private dataProductosService: DataProductosService,
    private carritoListService: CarritoListService
  ){}

  ngOnInit(): void {
    this.isLoading = true;
    this.dataProductosService.getData()
      .subscribe({
        next: (data) => {
          this.productos = data;
          this.isLoading = false;
          // console.log(this.productos);

        },
        error: (error) => {
          console.error('Error al obtener productos:', error);
          this.isLoading = false;
          // Mostrar un mensaje de error al usuario
        }
      }
    )
  }

  getAddProducto(producto:Producto)
  {
    console.log(producto);

    this.carritoListService.AddProducto(producto);

    return this.carritoListService.AddProducto;
  }

  getCantItems(){
    this.carritoListService.cantidadProductos;
  }

}
