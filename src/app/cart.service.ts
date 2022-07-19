import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items = [];
  counter = 0;
  count: BehaviorSubject<number>;
  totalAmount: BehaviorSubject<number>;
  totalAmountState;

  constructor(private _http: HttpClient) {
    this.count       = new BehaviorSubject(this.counter);
    this.totalAmount = new BehaviorSubject(this.totalAmountState);
  }

  updateCart(el) {
    this.count.next(this.items.length);
    this.totalAmount.next(el);
    console.log('items.length: ' + this.items.length);
    console.log("TOTAL AMOUNT FROM UPDATE CART: " + el);
  }

  calculate() {
    var amount = 0;
    [...this.items].forEach(function(child) {
      amount += child['price'];
      console.log(amount);
      return amount;
    });
    this.updateCart(amount);
  }

  addToCart(product) {
    this.items.push(product);
    this.calculate();
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.calculate();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.splice(0, this.items.length);
    this.updateCart(0);
    return this.items;
  }

  getShippingPrices() {
    return this._http.get('/assets/shipping.json');
  }

}