import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-product-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product-reactive.component.html',
  styleUrl: './add-product-reactive.component.css',
})
export class AddProductReactiveComponent {
  productForm: FormGroup;

  constructor(private fb :FormBuilder) {
    // this.productForm = new FormGroup({
    //   name: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //     Validators.maxLength(100),
    //   ]),
    //   title: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //     Validators.maxLength(200),
    //   ]),
    //   price: new FormControl('', [
    //     Validators.required,
    //     Validators.min(1000),
    //     Validators.max(200000),
    //   ]),
    //   description: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(10),
    //     Validators.maxLength(200),
    //   ]),
    // });
    this.productForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]],
      title:['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200),
      ]],
      price:['', [
        Validators.required,
        Validators.min(1000),
        Validators.max(200000),
      ]],
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
    });
  }
  get formControls() {
    return this.productForm.controls;
  }
  handleSubmitForm() {
    console.log(this.productForm);
    
  }
}
