import {Component} from 'angular2/core'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

import {BasicComponent} from "./components/basic.component";
import {TypeaheadComponent} from "./components/typeahead.component";

@Component({
  selector: 'app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">RXJS Observables</a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['BasicDemo']">Basic</a></li>
            <li><a [routerLink]="['TypeaheadDemo']">Typeahead</a></li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
@RouteConfig([

  {
    name: 'BasicDemo',
    component: BasicComponent,
    path: '/basic',
    useAsDefault: true
  },

  {
    name: 'TypeaheadDemo',
    component: TypeaheadComponent,
    path: '/typeahead'
  }

])
export class App {}
