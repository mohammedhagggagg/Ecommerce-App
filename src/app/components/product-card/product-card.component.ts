import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Router, RouterLink } from '@angular/router';
import { CardService } from '../../services/card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  cartService = inject(CardService);
  //Decorator[Input,Output]
  // @Input() productitem:any  //property ==>PArent Component [Product-list]
   // @Input() productitem!:Iproduct  //property ==>PArent Component [Product-list]
  productitem =input.required<Iproduct>();//==> using signals
  // @Output() sendToParent = new EventEmitter<number>(); //Send id From Child[product-card] To Parent[product-list]
  sendToParent= output<number>() //==> using signals
  router=inject(Router);
  private cartSubscription: Subscription | undefined; // لتخزين الاشتراك
  currentQuantity: number = 0;
  ngOnInit(): void {
    // الاشتراك في تغييرات العربة
    this.cartSubscription = this.cartService.cartItems$.subscribe(cartItems => {
      const cartItem = cartItems.find(item => item.product.id === this.productitem().id);
      this.currentQuantity = cartItem ? cartItem.quantity : 0; // تحديث الكمية
    });
  }

  ngOnDestroy(): void {
    // إلغاء الاشتراك عند تدمير المكون
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
  handleDeleteProduct(){
    console.log(this.productitem().id);

    this.sendToParent.emit(this.productitem().id); //Emit Event named [sendToParent]
  }
  handleRedirectToDetails(){
    this.router.navigate(['/product-details',this.productitem().id])
  }
  addToCart(): void {
    this.cartService.addToCart(this.productitem());
  }
  isMaxQuantityReached(): boolean {
    const product = this.productitem();
    const cartItems = this.cartService.getCartItems();
    const cartItem = cartItems.find(item => item.product.id === product.id);
    const currentQuantity = cartItem ? cartItem.quantity : 0;
    return currentQuantity >= product.stock;
  }
}
//TO NAVIGATE FROM HTML <a routerLink="/Path" routerLinkActive="Class Name (bootstrap)",[routerLinkActiveOption]={'exact:true} >
//TO NAVIGATE FROM TS => inject(Router) ==>this.router.navigate(['/path'])