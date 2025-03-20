import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formValues ={
    email: '',
    Password: ''  
  }
  handleSubmitForm(form: any) {
    console.log(form);
    console.log(form.value);
  }
}
