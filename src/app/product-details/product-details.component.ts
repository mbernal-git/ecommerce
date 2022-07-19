import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product;
  errorMsg;
  count: number;
  total: number;
  
  products;

  constructor(
    private _route: ActivatedRoute, 
    private _productsService: ProductsService, 
    private _cartService: CartService) {

  }

  addToCart(product) {
    window.alert((product.name));
    this._cartService.addToCart(product);
  }

  ngOnInit() {

    // Get routers parameter productId and store it in a local variable
    this._route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('productId'));
      this.id = id;
    });

    // Topbar cart item count
    this._cartService.count.subscribe(c => {
        this.count = c;
    });

    // Compute total amount when item has been added to the cart
    this._cartService.totalAmount.subscribe(
      a => this.total = a
    );

    // Subscribe to ProductService
    // Cast Observable into array and store it in a local variable
    this._productsService.getProducts()
      .subscribe(
        data => {
          // Populate local variables here using the observable
          this.products = data;
          this.product  = this.products[this.id];
          console.log(this.product);
        },
        error => this.errorMsg = <any>error
      );
  }

}