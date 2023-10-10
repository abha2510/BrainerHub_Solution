import { Injectable } from '@angular/core';
import { Product } from './dashboard/dashboard.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private someData: Product[] = [];
  private cartData: Product[] = [];

  constructor() { }  
  private _cartData = new BehaviorSubject<Product[]>([]);
  public cartData$ = this._cartData.asObservable();

  addData(product: Product) {
    const currentData = this._cartData.value;
    this._cartData.next([...currentData, product]);
  }
  getData(): Product[] {
    return this._cartData.value; 
  }
  clearCart() {
    this._cartData.next([]); 
  }
  updateCartData(cartData: Product[]) {
    this._cartData.next(cartData);
}
}
