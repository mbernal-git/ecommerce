import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProducts } from './products';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products;

  constructor(private _http: HttpClient) {
    this.products = this.getProducts();
  }

  getProducts(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>('/assets/products.json').catch(this.errorHandler);
  }

  getNewArrivals(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>('/assets/newarrivals.json').catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
   
}