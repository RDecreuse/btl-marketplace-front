import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Product} from "../../model/product";
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'product-detail',
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [],
  providers: [ProductService],
  styles: [require('./product-detail.component.css')],
  template: require('./product-detail.component.html')
})
export default class ProductListComponent implements OnInit, OnDestroy {
  @Input() product:Product;
  private sub:any;

  constructor(private productService:ProductService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.productService.getProduct(id).then(product => this.product = product);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
