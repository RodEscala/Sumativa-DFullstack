import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoFormComponent } from './carrito-form.component';

describe('CarritoFormComponent', () => {
  let component: CarritoFormComponent;
  let fixture: ComponentFixture<CarritoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
