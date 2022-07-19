import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products;
  errorMsg;

  constructor(private _productsService: ProductsService) {

  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale.');
  }

  ngOnInit() {
    this._productsService.getProducts()
      .subscribe(
        data => {
          this.products = data;
        },
        error => {
          this.errorMsg = <any>error;
        }
      );
  }
  
}