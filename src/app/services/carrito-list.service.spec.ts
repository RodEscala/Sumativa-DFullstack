import { TestBed } from '@angular/core/testing';

import { CarritoListService } from './carrito-list.service';

describe('CarritoListService', () => {
  let service: CarritoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
