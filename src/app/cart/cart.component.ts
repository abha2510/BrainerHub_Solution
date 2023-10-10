import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartProducts: Product[] = [];

  constructor(private cartService: CartService, private router: Router) {
    this.cartProducts = this.cartService.getData();
  }

  removeFromCart(product: Product) {
    const index = this.cartProducts.indexOf(product);
    if (index > -1) {
        this.cartProducts.splice(index, 1);
        this.cartService.updateCartData(this.cartProducts);
    }
}


 
  checkout() {
    alert('Proceeding to checkout!');
    this.cartService.clearCart(); 
    this.cartProducts = [];
    this.router.navigate(['/dashboard']);
  }

getTotalPrice(): number {
  return this.cartProducts.reduce((acc, product) => acc + (product.price * (product.quantity || 1)  ), 0);
}

increaseQuantity(product: Product): void {
  product.quantity = (product.quantity || 0) + 1;

}

decreaseQuantity(product: Product): void {
  if ((product.quantity || 0) > 1) {
    product.quantity = (product.quantity || 0) - 1;
}

}

}
