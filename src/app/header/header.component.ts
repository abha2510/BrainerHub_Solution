import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';

interface Product {
  id: number;
  name: string;
  price: number;

}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  cartCount: number = 0; 
  products: Product[] = [];
  private cartSubscription!: Subscription;

  constructor(private authService: AuthService, private router: Router,private cartService:CartService) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.cartData$.subscribe(cartData => {
      this.cartCount = cartData.length;
  });
  
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
