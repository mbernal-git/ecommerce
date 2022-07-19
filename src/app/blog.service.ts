import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IBlog } from './blog';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // private _url: string= "/assets/shipping.json";

  constructor(private http: HttpClient) {
    
  }
   
  getRecent(): Observable<IBlog[]> {
    return this.http.get<IBlog[]>('https://jsonplaceholder.typicode.com/posts/').catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
   
}