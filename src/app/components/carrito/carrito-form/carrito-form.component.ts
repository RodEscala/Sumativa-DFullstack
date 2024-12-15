import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoListService } from '../../../services/carrito-list.service';
import { carritoList } from '../../../interfaces/carrito-list.interface';

@Component({
  selector: 'app-carrito-form',
  imports: [HeaderComponent,RouterModule,CommonModule],
  templateUrl: './carrito-form.component.html',
  styleUrl: './carrito-form.component.css'
})
export class CarritoFormComponent implements OnInit{

  constructor(private carritoListService: CarritoListService){}

  ngOnInit(): void {
    this.getProductToList();

  }


  carritoProductList:carritoList[] = []

  getProductToList(){
    console.log('Lista');

    const productList = this.carritoListService.listCarrito
    for (let i = 0; i < productList.length; i++) {
      const element = productList[i];
      console.log(element);

      this.carritoProductList.push(element);


    }
  }

  getTotalCarrito():number{
    let total:number=0;
    for (const producto of this.carritoProductList) {

      total += (producto.price * producto.quantity)
    }
    return total;
  }

  deleteProductCarrito(id:number){
    let prodDel = this.carritoProductList.findIndex( producto => producto.id ===id )

    if(prodDel !== -1){
      this.carritoProductList.splice(prodDel,1);
    }
  }

}
