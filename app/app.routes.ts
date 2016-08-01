import {provideRouter, RouterConfig} from '@angular/router';
import {Home} from './home';
import {About} from './about';
import {ProductList} from "./product_list";

export const routes: RouterConfig = [
  {path: '', component: Home},
  {path: 'about', component: About},
  {path: 'products', component: ProductList}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
