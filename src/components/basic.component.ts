import {Component} from 'angular2/core'
import 'rxjs/Rx'
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'basic',
  template: ``
})

export class BasicComponent {

  constructor() {

    // Create the observable
    let observable$ = new Observable((observer) => {
      observer.next(1);

      observer.complete();
    });

    observable$
      .subscribe(
        (value) => console.log(value),
        (error) => console.log('error = ', error),
        () => console.log('Stream completed')
      )
  }
}
