import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CarritoListService {

  constructor() { }

    cantidadProductos:number=0;
    listCarrito:any[]=[];
  AddProducto(producto:any){

    const {id,title, price } = producto;
    let quantity:number=1;
    const index:number = this.listCarrito.findIndex( item => item.id === id)

    if(index !== -1){
      this.listCarrito[index].quantity += 1;
    }else{
      this.listCarrito.push({id,title,price,quantity })
    }
    this.addNumberCarrito();
    // this.addProductoToCarrito(producto);

  }

  addNumberCarrito():void{

    this.cantidadProductos ++;

  }
  // addProductoToCarrito(producto: Producto) {
  //   const index = this.listCarrito.findIndex(item => item.id === producto.id);
  //   if (index !== -1) {
  //     this.listCarrito[index].quantity += 1;
  //   } else {
  //     this.listCarrito.push({ ...producto, quantity: 1 });
  //   }
  //   console.log('addProductoToCarrito' + producto);
  //   console.log('listaCarrito' + this.listCarrito);

  //   this.getTotal(producto.price);
  // }

  total:number = 0;
  getTotal(price:number){
    this.total += price;
    // console.log(this.total );

  }



}
