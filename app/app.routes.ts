import {provideRouter, RouterConfig} from '@angular/router';
import {Home} from 'pages/home';
import {About} from 'pages/about';
import {ProductList} from "pages/product-list";

export const routes: RouterConfig = [
  {path: '', component: Home},
  {path: 'about', component: About},
  {path: 'products', component: ProductList}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
