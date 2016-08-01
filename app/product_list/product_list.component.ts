import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

const PRODUCTS: Product[] = [
  { id: 11, name: 'Mr. Nice', comment:'test1' },
  { id: 12, name: 'Narco' , comment:'test2' },
  { id: 13, name: 'Bombasto' , comment:'test3' },
  { id: 14, name: 'Celeritas' , comment:'test4' },
  { id: 15, name: 'Magneta' , comment:'test5' },
  { id: 16, name: 'RubberMan' , comment:'test6' },
  { id: 17, name: 'Dynama' , comment:'test7' },
  { id: 18, name: 'Dr IQ' , comment:'test8' },
  { id: 19, name: 'Magma' , comment:'test9' },
  { id: 20, name: 'Tornado' , comment:'test10' }
];


@Component({
  selector: 'home',
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [],
  styles: [require('./product_list.component.css')],
  template: require('./product_list.component.html')
})
export default class ProductListComponent {
  public products = PRODUCTS;

  constructor() {
  }

}

export class Product {
  id: number;
  name: string;
  comment: string;
}
