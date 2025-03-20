import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
formValues = {
  name: '',
  price: '',
  description: '',
  category: '',
  title: '',

}
handleSubmitForm(form:any)
{
console.log(form);
console.log(form.value);


}
}
