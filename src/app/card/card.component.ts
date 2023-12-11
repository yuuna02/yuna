// card.component.ts
import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() product: any;
  products = [
    { name: 'Yome Bundle', price: 45.0, img: 'https://i.pinimg.com/564x/75/6f/09/756f09c830c3338caca4dba9b555126c.jpg' },
    { name: 'Luna Yoga Strap', price: 10.0, img: 'https://i.pinimg.com/564x/98/8e/e8/988ee8b09b70dd7f9af6cf70db94dd6d.jpg' },
    { name: 'Luna Bundle', price: 35.0, img: 'https://i.pinimg.com/564x/ee/f2/ef/eef2ef1a83aae5ed7dc1f9d435936672.jpg' },
    { name: 'Luna Yoga Blocks', price: 45.0, img: 'https://i.pinimg.com/564x/ca/41/b2/ca41b274957892489bc2b87c71500e17.jpg' },
    // Add the rest of your products here
  ];

  constructor(public cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
