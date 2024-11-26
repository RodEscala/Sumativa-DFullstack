import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  private listCarrito: any[] = [];

  constructor() { }

  // Método para agregar un producto al carrito
  addProductoToCarrito(producto: any) {
    const index = this.listCarrito.findIndex(item => item.id === producto.id);
    if (index !== -1) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      this.listCarrito[index].quantity += 1;
    } else {
      // Si el producto no está, agregarlo al carrito con cantidad 1
      this.listCarrito.push({ ...producto, quantity: 1 });
    }
  }

  // Obtener el carrito
  getCarrito() {
    return this.listCarrito;
  }

  // Obtener el número total de productos en el carrito
  getCantidadProductos(): number {
    return this.listCarrito.reduce((acc, item) => acc + item.quantity, 0);
  }

}
