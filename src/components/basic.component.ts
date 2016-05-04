import {Component, Inject} from 'angular2/core'
import {Observable, Subscriber} from "rxjs/Rx";
import {Http, HTTP_PROVIDERS} from "angular2/http";

const API_URL = 'http://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'basic',
  template: `<h2>Basic example</h2><p>See console</p>`,
  providers: [HTTP_PROVIDERS]
})

export class BasicComponent {

  constructor(@Inject(Http) private _http: Http) {

    // 1. Create a promise vs. create an observable
    // Emit a single value

    // Create the promise
    let promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log('Promise resolved');
        resolve(10);
      }, 2000);
    });

    // Create the observable
    let observable = new Observable((observer) => {
      let timeoutId = setTimeout(() => {
        console.log('Observer emitted a value');
        observer.next(20);
      }, 2000);

      return () => {
        console.log('Observable tear down');
        clearTimeout(timeoutId);
      };
    });

    let httpObservable = this._http.get(API_URL);

    // Execute
    promise.then((value) => console.log(value));
    let disposable = httpObservable
      .retry()
      .map(x => x.json())
      .subscribe((value) => console.log(value));

    // Tear down
    // setTimeout(() => {
    //   disposable.unsubscribe();
    // }, 1000);
  }
}
