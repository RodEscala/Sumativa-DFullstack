import { Component } from '@angular/core';
import { RouterModule,Router, RouterLink } from '@angular/router';
import { CarritoListService } from '../../services/carrito-list.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone : true,
  imports: [RouterModule, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private carritoListService: CarritoListService, private router: Router ){

  }

  // navigateToCarritoForm(){
  //   this.router.navigate(['/carrito'])
  // }


  getCantProd(){{
    return this.carritoListService.cantidadProductos;

  }}

}
