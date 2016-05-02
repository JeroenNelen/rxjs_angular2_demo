import {Component} from 'angular2/core'
import {Observable, Subscriber} from "rxjs/Rx";

@Component({
  selector: 'basic',
  template: `<h2>Basic example</h2><p>See console</p>`
})

export class BasicComponent {

  constructor() {

    // Create the observable
    let stream$ = new Observable((sink: Subscriber<any>) => {
      sink.next(1);
      sink.next(2);
      sink.next(3);
      sink.next(4);
      sink.next(5);

      sink.complete();
    });

    stream$
      .map((x: number) => x * 3)
      .filter((x: number) => x % 2 === 0)
      .subscribe(
        (value) => console.log(value),
        (error) => console.log('error = ', error),
        () => console.log('Stream completed')
      )
  }
}
