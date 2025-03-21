import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CardService } from '../../services/card.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: { product: Iproduct, quantity: number }[] = [];
  constructor(private cartService: CardService) {
    this.cartItems = this.cartService.getCartItems();
  }

  // Increase quantity (limited by stock)
  increaseQuantity(productId: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item && item.quantity < item.product.stock) {
      item.quantity++;
      this.cartService.updateQuantity(productId, item.quantity);
    }
  }

  // Decrease quantity
  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.cartService.updateQuantity(productId, item.quantity);
    }
  }

  // Remove item from cart
  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems();
  }

  // Get total price
  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
