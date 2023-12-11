// header.component.ts
// yunashop.component.ts
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-yunashop',
  templateUrl: './yunashop.component.html',
  styleUrls: ['./yunashop.component.css']
})
export class YunashopComponent {
  // Component logic goes here
  cartItemCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Subscribe to the cartCount$ observable
    this.cartService.cartCount$.subscribe(count => {
      // Update the cartItemCount property when the cart count changes
      this.cartItemCount = count;
    });
  }
}






