import {Component} from 'angular2/core'
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'basic',
  template: `<h2>Basic example</h2><p>See console</p>`
})

export class BasicComponent {

  constructor() {

    // Create the observable
    let observable$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);

      observer.complete();
    });

    observable$
      .map((x: number) => x * 3)
      .filter(x => x % 2 === 0)
      .subscribe(
        (value) => console.log(value),
        (error) => console.log('error = ', error),
        () => console.log('Stream completed')
      )
  }
}
