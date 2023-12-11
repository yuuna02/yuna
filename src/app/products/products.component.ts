import { Component } from '@angular/core';
import { CartService } from '../cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, img: 'https://i.pinimg.com/564x/ad/1e/0b/ad1e0b37a9c76b1ee0209af579a138a5.jpg' },
    // Add more products as needed
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    console.log('Added to cart:', product);
    
  }
}

