import { Injectable } from '@angular/core';

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

  total:number = 0;
  getTotal(price:number){
    this.total += price;
    // console.log(this.total );

  }



}
