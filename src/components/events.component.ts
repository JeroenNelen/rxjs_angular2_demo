import {Component} from 'angular2/core'
import {Observable, Subscriber} from "rxjs/Rx";

@Component({
  selector: 'events',
  template: `<h2>Events example</h2><p>See console</p>`
})

export class EventsComponent {

  constructor() {

    let mouseMoveStream$ = Observable.fromEvent(window, 'mousemove');

    mouseMoveStream$
      .debounceTime(500)
      .subscribe((event) => {
        console.log(event);
      });
  }
}
