import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Product} from "../../model/product";
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'product-list',
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [],
  providers: [ProductService],
  styles: [require('./product-list.component.css')],
  template: require('./product-list.component.html')
})
export default class ProductListComponent implements OnInit {
  public products:Product[];

  constructor(private productService:ProductService) {
  }

  getProducts() {
    this.productService.getProducts().then(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }
}
