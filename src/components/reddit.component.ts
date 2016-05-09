import {Component, Inject, OnInit, EventEmitter} from 'angular2/core'
import {Http, HTTP_PROVIDERS, Response} from "angular2/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";

const API_URL_NEW = 'https://api.reddit.com/r/funny?sort=new&limit=1&dept=1';
const createCommentsURL = (subreddit, id) => `https://api.reddit.com/r/${subreddit}/comments/${id}?dept=1&showmore=false&sort=new&context=0`;
const getComments = (commentsResponse) => commentsResponse[1].data.children;

@Component({
  selector: 'reddit',
  providers: [HTTP_PROVIDERS],
  template: `<h2>Reddit</h2>

<p>
  <button class="btn btn-primary" id="button" name="button" (click)="buttonClicked.emit($event)">Start/Stop polling</button>
</p>

<div *ngIf="comments.length">
  <p>Newest comments in the most recent thread of /r/{{ comments[0].data.subreddit }}:</p>
  
  <div style="max-height: 300px; overflow-y: scroll;">
    <table class="table table-bordered table-condensed">
      <thead>
        <tr>
          <th>Author</th>
          <th>Comment</th>
          <th>Upvotes</th>
        </tr>
      </thead>
      <tr *ngFor="#comment of comments">
        <td>{{ comment.data.author }}</td>
        <td>{{ comment.data.body }}</td>
        <td>{{ comment.data.ups }}</td>
      </tr> 
    </table>
  </div>
</div>`
})
export class RedditComponent implements OnInit {

  comments:Array<any> = [];
  buttonClicked:EventEmitter<any> = new EventEmitter();
  pollingStreamDisposable = undefined;

  constructor(@Inject(Http) private _http:Http) {
  }

  ngOnInit() {

    // Fetch stream
    let fetchStream = this._http.get(API_URL_NEW).retryWhen((errors) => errors.delay(2000))

      // Convert to JSON
      .map((response:Response) => response.json())

      // Get the top post
      .map((responseJSON:any) => responseJSON.data.children[0].data)

      // Create the URL
      .map((threadInfo:any) => createCommentsURL(threadInfo.subreddit, threadInfo.id))

      // Fetch the comments for the top post
      .switchMap((url:string) => this._http.get(url))

      // Convert to JSON
      .map((response:Response) => response.json())

      // Get all the comments from this thread
      .map((data:any) => getComments(data))

      // Only trigger if comments changed
      .distinctUntilChanged();

    // Ticker stream
    let intervalStream = Observable.interval(5000);

    // Polling stream = timer + fetch combined to create a ticker
    // fetchStream.merge instead of Observable.merge to make fetchStream trigger intially
    let pollingStream = fetchStream.merge(intervalStream.switchMap(() => fetchStream));

    // Button clicked stream
    this.buttonClicked

      .debounceTime(300)

      .subscribe(() => {
      if (this.pollingStreamDisposable) {
        this.pollingStreamDisposable.unsubscribe();
        this.pollingStreamDisposable = undefined;
      } else {
        this.pollingStreamDisposable = pollingStream.subscribe((comments:Array<any>) => {
          console.log(comments);
          this.comments = comments;
        });
      }
    });
  }

}
