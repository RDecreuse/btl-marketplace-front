import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private heroesUrl = '/api/products';

  constructor(private http: Http) {

  }

  getProducts(){
    return this.http.get(this.heroesUrl) // return a  RxJS Observable
      .toPromise()
      .then(response => response.json() as Product[])
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
