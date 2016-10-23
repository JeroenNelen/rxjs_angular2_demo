import {Component, Inject, OnInit, EventEmitter} from '@angular/core'
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";

const API_URL_NEW = 'https://api.reddit.com/new?dept=1&sort=new';
const getNewestThreads = (responseJSON) => responseJSON.data.children;
@Component({
  selector: 'reddit',
  template: `<h2>Reddit</h2>

<p>
  <button class="btn btn-primary" id="button" name="button">Start/Stop polling</button>
</p>

<div *ngIf="threads.length">
  <p>Latest threads created on Reddit:</p>
  
  <table class="table table-bordered table-condensed">
      <thead>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>Upvotes</th>
          <th>Subreddit</th>
        </tr>
      </thead>
      <tr *ngFor="let thread of threads">
        <td>{{ thread.data.author }}</td>
        <td>{{ thread.data.title }}</td>
        <td>{{ thread.data.ups }}</td> 
        <td>{{ thread.data.subreddit }}</td>
      </tr> 
    </table>
</div>`
})
export class RedditComponent implements OnInit {

  threads:Array<any> = [];
  pollingStreamDisposable = undefined;

  constructor(private http: Http) {}

  ngOnInit() {

    // Fetch stream
    // let fetchStream =
    //
    //   // Get newest threads
    //   this._http.get(API_URL_NEW)
    //
    //   // Re-try after 2 seconds when there is no internet connection
    //   .retryWhen((errors) => errors.delay(2000))
    //
    //   // Convert to JSON
    //   .map((response:Response) => response.json())
    //
    //   // Get the newest threads
    //   .flatMap((responseJSON:any) => getNewestThreads(responseJSON))
    //
    //   // Don't show NSFW threads
    //   .filter((thread:any) => thread.data.over_18 === false)
    //
    //   // Only show threads that dont have negative upvotes
    //   .filter((thread:any) => thread.data.ups >= 0)
    //
    //   // Show a maximum of 10 threads
    //   .take(10)
    //
    //   // Group together and emit every 5 seconds
    //   .bufferTime(5000)
    //
    //   // Only trigger if comments changed
    //   .distinctUntilChanged();
    //
    // // Ticker stream
    // let intervalStream = Observable.interval(5000);
    //
    // // Polling stream = timer + fetch combined to create a ticker
    // // fetchStream.merge instead of Observable.merge to make fetchStream trigger intially
    // let pollingStream = fetchStream.merge(intervalStream.switchMap(() => fetchStream));
    //
    // // Button clicked stream
    // let buttonElem = document.getElementById('button');
    // Observable.fromEvent(buttonElem, 'click')
    //
    //   .debounceTime(300)
    //
    //   .subscribe(() => {
    //     if (this.pollingStreamDisposable) {
    //       this.pollingStreamDisposable.unsubscribe();
    //       console.log('Polling ended');
    //       this.pollingStreamDisposable = undefined;
    //     } else {
    //       console.log('Polling started');
    //       this.pollingStreamDisposable = pollingStream.subscribe((threads:Array<any>) => this.threads = threads);
    //     }
    //   });
  }

}
