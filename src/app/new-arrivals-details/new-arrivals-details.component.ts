import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-new-arrivals-details',
  templateUrl: './new-arrivals-details.component.html',
  styleUrls: ['./new-arrivals-details.component.scss']
})
export class NewArrivalsDetailsComponent implements OnInit {

  id: number;
  product;
  products;
  errorMsg;
  total: number;

  constructor(
    private _route: ActivatedRoute, 
    private _cartService: CartService,
    private _productService: ProductsService) {
      
  }

  addToCart(product) {
    window.alert((product.name));
    this._cartService.addToCart(product);
  }

  ngOnInit() {

    // Get routers paramater productId
    this._route.paramMap
      .subscribe(
        (params: ParamMap) => {
          this.id = parseInt(params.get('productId'));  
        }
      );

    // Get latest total cart price
    this._cartService.totalAmount
      .subscribe(
        a => {
          this.total = a;
        }
      );

    // Subscribe to ProductService
    this._productService.getNewArrivals()
      .subscribe(
        data => {
          // Populate local variables here using the observable
          this.products = data;
          this.product = this.products[this.id];
          console.log(this.product);
        },
        error => {
          this.errorMsg = <any>error;
        }
      );
  
  }

}