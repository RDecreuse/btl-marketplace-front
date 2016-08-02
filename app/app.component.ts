import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavBarComponent} from './directives/navbar.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [...ROUTER_DIRECTIVES, NavBarComponent],
  pipes: [],
  styles: [`
    :host {
      font-family: sans-serif;
    }
    header, footer, main {
      margin: 0 1em;
    }
    footer {
      margin-top: 1em;
      border-top: 1px solid #ccc;
      padding-top: 0.5em;
    }
  `],
  template: `
    <header>
      <h1>BTL Marketplace</h1>
    </header>
    <navbar></navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  constructor() {

  }
}
