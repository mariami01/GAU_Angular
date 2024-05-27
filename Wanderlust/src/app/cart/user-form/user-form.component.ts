import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService
  ) {
    this.userForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expirationDate: ['', Validators.required],
      securityCode: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      billingZip: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  getTodayStartDate(): string {
    return new Date().toISOString().split('T')[0];
  }
  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      const apartmentData = this.cartService.getItems();

      console.log('User Data:', userData);
      console.log('Apartment Data:', apartmentData);

      alert('You have successfully made a booking');
      this.userForm.reset();
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
