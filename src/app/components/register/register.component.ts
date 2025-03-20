import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  // constructor() {
  //   this.registerForm = new FormGroup({
  //     name :new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
  //     email :new FormControl('',[Validators.email,Validators.required]),
  //     userName:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(100),Validators.pattern(/^\S+$/)]),
  //     password :new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*$%#])[A-Za-z\d@*$%#]+$/),]),

  //   });

  // }
  constructor() {
    this.registerForm = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        userName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
          Validators.pattern(/^\S+$/),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*$%#])[A-Za-z\d@*$%#]+$/
          ),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      this.matchPasswords
    );
  }
  // Custom validator to check if passwords match
  matchPasswords(control: AbstractControl) {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  get formControls() {
    return this.registerForm.controls;
  }
  handleSubmitForm() {
    console.log(this.registerForm);
  }
}
