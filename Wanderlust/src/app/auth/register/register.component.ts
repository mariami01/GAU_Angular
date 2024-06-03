import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', Validators.required],
      avatar: [''],
      gender: [0, Validators.required]
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { name, email, password, phoneNumber, avatar, gender } = this.registerForm.value;
      this.authService.register(name, email, password, avatar, phoneNumber, gender).subscribe(response => {
        console.log('Registration successful', response);
        this.router.navigate(['/Login']);
      }, (error: HttpErrorResponse) => {
        console.error('Registration error', error);

      });
    }
  }
}
