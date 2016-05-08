import {Component} from 'angular2/core'
import {Http, HTTP_PROVIDERS} from "angular2/http";
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/sample';
import 'rxjs/add/operator/distinct';


@Component({
  selector: 'creation',
  template: `<div class="container">
    <div class="header">
         <h2>Hot vs cold</h2>
         <h3>Open console</h3>
    </div>
</div>`
})

export class HotvscoldComponent {

  constructor() {

    // ################## cold
    let counter = Observable.interval(1000)
      .take(10);

    // ################## hot
    // let counter = Observable.interval(1000)
    //   .take(10)
    //   .publish()
    //   .refCount();

    // counter.subscribe(v => console.log("first: ", v));
    //
    // setTimeout(() => {
    //   counter.subscribe(v => console.log("second: ", v));
    // }, 5000);
  }
}
