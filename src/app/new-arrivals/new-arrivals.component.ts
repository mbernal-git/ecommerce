import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent implements OnInit {

  newarrivals;
  errorMsg;

  constructor(private _productService: ProductsService) {

  }

  ngOnInit() {
    this._productService.getNewArrivals()
      .subscribe(
        data => {
          this.newarrivals = data;
        },
        error => {
          this.errorMsg = <any>error;
        }
      );
  }

}