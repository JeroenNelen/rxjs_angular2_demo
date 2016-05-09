import {Component, OnInit, EventEmitter} from 'angular2/core'
import {Http, HTTP_PROVIDERS} from "angular2/http";
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/sample';
import 'rxjs/add/operator/distinct';


@Component({
  selector: 'creation',
  template: `<div class="container">
    <div class="header">
         <h2>Operations</h2>
         <h3>Open console</h3>
    </div>
    <button id="tester"> This is clickable</button>
</div>`
})

export class OperationComponent implements OnInit {

  constructor() {
    //######################################################
    // map vs flatmap

    //######################################################
    // debounce

    //######################################################
    // distinct, filter, count, last
    // let array = [1,2,3,3,3,4,4,4,4,5,6,7,7,7,8];


    //######################################################
    // sample

    //######################################################
    // merge


    // combineLatest, startWith




    // show debounce on click























    //######################################################
    // map vs flatmap

    // synchroon
    // let source = Observable.interval(100).take(10);

    // asynchroon via timer
    // let source = Observable.interval(100).take(10)
    //   .map(v => Observable.timer(500).map(() => v)); // [object object] = observable

    // flatMap for the rescue
    // let source = Observable.interval(100).take(10)
    //   .flatMap(v => Observable.timer(500).map(() => v));
    //
    // source.subscribe(value => console.log(value.toString()));

    //######################################################
    // debounce
    // let debounceSource = Observable.interval(100).take(20);
    // let debounceSource = Observable.interval(100).take(20).debounce(v => Observable.timer(300));
    // debounceSource.subscribe(value => console.log("debounce: ", value));

    //######################################################
    // distinct, filter, count, last
    // let array = [1,2,3,3,3,4,4,4,4,5,6,7,7,7,8];
    // let distinctSource = Observable.from(array)
    //   .distinct()
    //   .filter(v => v%2 === 0)
    //   .count()
    //   .last()
    //   .subscribe(v => console.log(v));

    //######################################################
    // sample
    // let debounceSource = Observable.interval(100)
    //   .take(21)
    //   .sample(Observable.interval(200))
    //   .subscribe(v => console.log(v));

    //######################################################
    // combining
    // let firstStream, firstStream2 = Observable.interval(200)
    //   .take(5)
    //   .map(v => "1" + v.toString());
    // let secondStream = Observable.interval(200)
    //   .take(5)
    //   .map(v => "2" + v.toString());

    // merge
    // firstStream
    //   .merge(secondStream)
    //   .subscribe(v => console.log("merged :", v));

    // combineLatest, startWith
    // let thirdStream = Observable.interval(1000)
    //   // .startWith(9)
    //   .take(6)
    //   .map(v => "2" + v.toString());
    //
    // firstStream2
    //   .combineLatest(thirdStream)
    //   .subscribe(v => console.log("merged :", v));

}

  ngOnInit() {
    // debounce click
    // let button = document.getElementById('tester');
    // let fromEventObservable = Observable.fromEvent(button,'click').debounce(v => Observable.timer(300));
    // fromEventObservable.subscribe(value => console.log("from click event: ",value));
  }
}
