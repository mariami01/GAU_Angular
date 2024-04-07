import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  myForm: FormGroup = new FormGroup({
    FullName: new FormControl(''),
    UserName: new FormControl(''),
    Email: new FormControl(''),
    AcceptTerms: new FormControl(false),
  })

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      Username: ["",
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(6)
        ]
      ],
      Email: ["", Validators.email],
      AcceptTerms: ["", Validators.requiredTrue]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  formSubmit() {
    console.log(this.myForm.value)
  }
}
