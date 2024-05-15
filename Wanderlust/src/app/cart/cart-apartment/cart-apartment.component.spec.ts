import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartApartmentComponent } from './cart-apartment.component';

describe('CartApartmentComponent', () => {
  let component: CartApartmentComponent;
  let fixture: ComponentFixture<CartApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartApartmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
