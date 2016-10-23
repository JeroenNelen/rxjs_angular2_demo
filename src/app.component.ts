import {Component} from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">RXJS Observables</a>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li><a routerLink="/basic">Basic</a></li>
            <li><a routerLink="/creation">Creation</a></li>
            <li><a routerLink="/operation">Operations</a></li>
            <li><a routerLink="/hotvscold">Hot vs cold</a></li>
            <li><a routerLink="/typeahead">Typeahead</a></li>
            <!--<li><a routerLink="/github">Github</a></li>-->
            <li><a routerLink="/reddit">Reddit</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class App { }
