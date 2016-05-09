import {Component} from 'angular2/core'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

import {BasicComponent} from "./components/basic.component";
import {TypeaheadComponent} from "./components/typeahead.component";
import {GithubComponent} from "./components/github.component";
import {CreationComponent} from "./components/creation.component";
import {OperationComponent} from "./components/operation.component";
import {HotvscoldComponent} from "./components/hotvscold.component";

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
            <li><a [routerLink]="['CreationDemo']">Creation</a></li>
            <li><a [routerLink]="['OperationDemo']">Operations</a></li>
            <li><a [routerLink]="['HotvscoldDemo']">Hot vs cold</a></li>
            <li><a [routerLink]="['TypeaheadDemo']">Typeahead</a></li>
            <li><a [routerLink]="['GithubDemo']">Github</a></li>
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
  },

  {
    name: 'GithubDemo',
    component: GithubComponent,
    path: '/github'
  },

  {
    name: 'CreationDemo',
    component: CreationComponent,
    path: '/creation'
  },

  {
    name: 'OperationDemo',
    component: OperationComponent,
    path: '/operation'
  },

  {
    name: 'HotvscoldDemo',
    component: HotvscoldComponent,
    path: '/hot-vs-cold'
  }

])
export class App { }
