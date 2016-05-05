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

    // Live coding #1 - gelijkenissen tussen promise en observable
    // Aanmaken
    // Waarde ontvangen
    // Error opvangen
    // Completie opvangen

    // Live coding

    /*let observable = new Observable((subscriber) => {

      // Setup
      var timeoutId = setTimeout(() => {
        console.log('Observable emitted value');
        subscriber.next(20);
        subscriber.next(30);
        subscriber.complete();
      }, 1000);

      // Tear down
      return () =>  {
        clearTimeout(timeoutId);
      }
    });*/

    let observable = this._http.get(API_URL).retryWhen(error => error.delay(500));

    let disposable = observable.subscribe(
      (value) => console.log(value.json()),     // .then
      (error) => console.warn(error),           // .catch
      () => console.log('Stream completed')
    );

    /*setTimeout(() => {
      disposable.unsubscribe();
    }, 500);*/
  }
}
