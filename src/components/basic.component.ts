import {Component, Inject} from '@angular/core'
import "rxjs/Rx";
import {Observable} from "rxjs/Rx";
//
// const SLOW_API_URL = 'http://slowwly.robertomurray.co.uk/delay/5000/url/http://www.google.co.uk';
// const API_URL = 'http://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'basic',
  template: `<h2>Basic example</h2><p>See console</p>`
})

export class BasicComponent {

  constructor() {

    let promise = new Promise((resolve, reject) => {
      console.log('promise executed');
      setTimeout(() => {
        resolve(10);
      }, 1000);
    });

    promise.then(
      (value) => console.log(value),
      (error) => console.error(error)
    );

    let observable = new Observable((subscriber) => {
      console.log('observable executed');
      setTimeout(() => {
        subscriber.next(20);
      }, 1000);
    });

    observable.subscribe(
      (value) => console.log(value)
    );

  }
}
