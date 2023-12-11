// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  private cartItems: any[] = [];

  addToCart(product: any) {
    this.cartItems.push(product);
    this.cartCountSubject.next(this.cartItems.length);
  }

  getCartItems() {
    return this.cartItems;
  }
}
