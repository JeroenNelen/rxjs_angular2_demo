import {Component, OnInit, EventEmitter} from 'angular2/core'
import {Http, HTTP_PROVIDERS} from "angular2/http";
import {Observable} from 'rxjs/Rx'

@Component({
  selector: 'creation',
  template: `<div class="container">
    <div class="header">
         <h2>Creation</h2>
         <h3>Open console</h3>
    </div>
    <button id="tester"> This is clickable</button>
</div>`
})

export class CreationComponent implements OnInit {

  constructor() {
    //######################################################
    // Observable.create
    let createObservable = Observable.create(observer => {
        // values to emit via next
        observer.next(1);
        observer.next(2);
        observer.next(3);

        // complete the sequence
        observer.complete();
    });
    createObservable.subscribe((value) => console.log("create: ", value));

  //######################################################
  // Observable.from
  let array = ["from 1","from 2","from 3"];
  let fromObservable = Observable.from(array);
  fromObservable.subscribe(value => console.log(value));

  let promise = Promise.resolve("from promise");
  let fromPromiseObservable = Observable.fromPromise(promise);
  fromPromiseObservable.subscribe(value => console.log(value));

  //######################################################
  // Observable.interval
  let intervalObservable = Observable.interval(500).take(10);
  intervalObservable.subscribe(value => console.log("interval: ", value));

  //######################################################
  // Observable.range
  let rangeObservable = Observable.range(1,10);
  rangeObservable.subscribe(value => console.log("range: ", value));
}

  ngOnInit() {
    let button = document.getElementById('tester');
    let fromEventObservable = Observable.fromEvent(button,'click');
    fromEventObservable.subscribe(value => console.log("from click event: ",value));
  }
}
