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
                      <td><a href="{{thread.data.url}}" target="_blank">{{ thread.data.title }}</a></td>
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

      // Get newest threads

      // Re-try after 2 seconds when there is no internet connection

      // Convert to JSON

      // Get the newest threads

      // Don't show NSFW threads

      // Only show threads that dont have negative upvotes

      // Show a maximum of 10 threads

      // Group together and emit every 5 seconds

      // Only trigger if comments changed

    // Ticker stream
    let intervalStream = Observable.interval(5000);

    // Polling stream = timer + fetch combined to create a ticker, combine streams
    // let pollingStream =

    // Button clicked stream
    let buttonElem = document.getElementById('button');
    // write an option to start and stop the polling

  }

}
