import {Component} from 'angular2/core'
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'
import {BasicComponent} from "./components/basic.component";


@Component({
  selector: 'app',
  template: `
    <div class="container">
      <h2>Reactive Angular2</h2>
      <div>
        <a [routerLink]="['BasicDemo']">Basic</a>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([

  {
    name: 'BasicDemo',
    component: BasicComponent,
    path: '/basic',
    useAsDefault: true
  }

])
export class App {}
