import {Component, Inject, OnInit, EventEmitter} from 'angular2/core'
import {Http, HTTP_PROVIDERS, Response} from "angular2/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";

const API_URL_NEW = 'https://api.reddit.com/new?dept=1&sort=new';
const getNewestThreads = (responseJSON) => responseJSON.data.children;

@Component({
  selector: 'reddit',
  providers: [HTTP_PROVIDERS],
  template: `<h2>Reddit</h2>

<p>
  <button class="btn btn-primary" id="button" name="button" (click)="buttonClicked.emit($event)">Start/Stop polling</button>
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
      <tr *ngFor="#thread of threads">
        <td>{{ thread.data.author }}</td>
        <td>{{ thread.data.title }}</td>
        <td>{{ thread.data.ups }}</td> 
        <td>{{ thread.data.subreddit }}</td>
      </tr> 
    </table>
</div>`
})
export class RedditComponent implements OnInit {

  threads:Array<any> = [];                                // Contains an array of threads, each thread has a property 'data' which contains information about the thread
  pollingStreamDisposable = undefined;                    // I wouldn't know what you would use this for..

  constructor(@Inject(Http) private _http:Http) {}        // Inject Http service, we will need it to do http calls using this._http.get(URL)

  ngOnInit() {

    // Write code here
  }

}
