import { TestBed } from '@angular/core/testing';

import { CarritoListService } from './carrito-list.service';

describe('CarritoListService', () => {
  let service: CarritoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[CarritoListService]});
    service = TestBed.inject(CarritoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addProducto',()=>{
    it('Agregar un producto si el carrito no existe',()=>{
      const producto ={ id: 1, title:'Producto 1',price:3000};
      service.AddProducto(producto);
      // espera que la lista carrito tenga un largo de 1
      expect(service.listCarrito.length).toBe(1);
    })

    it('debe tener el id correcto del producto agregado',()=>{
      const producto ={ id: 1, title:'Producto 1',price:3000};
      service.AddProducto(producto);
      // espera que la listaCarrito en la posicion 0 tenga un id de 1
      expect(service.listCarrito[0].id).toBe(1);

    })
    it('debe tener el nombre correcto del producto',()=>{
      const producto ={ id: 1, title:'Producto 1',price:3000};
      service.AddProducto(producto);
      expect(service.listCarrito[0].title).toBe("Producto 1")

    })

    it('debe tener el nombre correcto del producto',()=>{
      const producto ={ id: 1, title:'Producto 1',price:3000};
      service.AddProducto(producto);
      expect(service.listCarrito[0].price).toBe(3000);

    })



    it('Aumentar la cantidad de un producto',()=>{
      const producto ={ id: 1, title:'Producto 1',price:3000};
      service.AddProducto(producto);
      service.AddProducto(producto);
      expect(service.listCarrito[0].quantity).toBe(2);
    })

    it('addNumberCarrito',()=>{
      const initialCount = service.cantidadProductos;
      service.addNumberCarrito();
      expect(service.cantidadProductos).toBe(initialCount + 1)
    })

    describe('getTotal',() =>{
      it('Mostrar el total',()=>{
        service.getTotal(100);
        service.getTotal(2200);
        service.getTotal(300);
        expect(service.total).toBe(2600)

      })
    })

  })
});
