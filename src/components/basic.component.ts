import {Component, Inject} from 'angular2/core'
import {Http, HTTP_PROVIDERS} from "angular2/http";
import "rxjs/Rx";

const API_URL = 'http://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'basic',
  template: `<h2>Basic example</h2><p>See console</p>`,
  providers: [HTTP_PROVIDERS]
})

export class BasicComponent {

  constructor(@Inject(Http) private _http: Http) {

  }
}
