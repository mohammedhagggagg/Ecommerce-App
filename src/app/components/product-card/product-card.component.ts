import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  //Decorator[Input,Output]
  // @Input() productitem:any  //property ==>PArent Component [Product-list]
   // @Input() productitem!:Iproduct  //property ==>PArent Component [Product-list]
  productitem =input.required<Iproduct>();//==> using signals
  // @Output() sendToParent = new EventEmitter<number>(); //Send id From Child[product-card] To Parent[product-list]
  sendToParent= output<number>() //==> using signals
  router=inject(Router);
  handleDeleteProduct(){
    console.log(this.productitem().id);

    this.sendToParent.emit(this.productitem().id); //Emit Event named [sendToParent]
  }
  handleRedirectToDetails(){
    this.router.navigate(['/product-details',this.productitem().id])
  }
}
//TO NAVIGATE FROM HTML <a routerLink="/Path" routerLinkActive="Class Name (bootstrap)",[routerLinkActiveOption]={'exact:true} >
//TO NAVIGATE FROM TS => inject(Router) ==>this.router.navigate(['/path'])