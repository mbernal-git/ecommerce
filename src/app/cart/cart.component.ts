import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  count: number;
  total: number;
  checkoutForm;

  constructor(private _cartService: CartService, private _formBuilder: FormBuilder) {
    this.items        = this._cartService.getItems();
    this.checkoutForm = this._formBuilder.group({
      name:    '',
      address: ''
    });
  }

  ngOnInit() {
    this._cartService.count.subscribe(
      c => this.count = c
    );

    this._cartService.totalAmount.subscribe(
      a => this.total = a
    );

  }

  getTotal() {
    this._cartService.calculate();
  }

  removeItem(id) {
    this._cartService.removeItem(id);
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this._cartService.clearCart();
    this.checkoutForm.reset();
  }

  clear() {
    this._cartService.clearCart();
  }

}