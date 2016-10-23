import {Component} from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Http, Response} from "@angular/http";

const API_URL = 'https://api.github.com/search/users';
const makeURL = (query) => `${API_URL}?q=${query}`

@Component({
  selector: 'github',
  template: `<div class="container">
    <div class="header">
         <h2>Who's following our first result</h2>
    </div>
    <input type="text" placeholder="search github..." #term class="form-control" (keyup)="search(term.value)">
    <div *ngIf="match.login" class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <h2><a [href]="match.html_url" >{{ match.login }}</a></h2>
        <img [src]="match.avatar_url" class="img-responsive thumbnail">
      </div>
    </div>
    <div *ngIf="match.login" class="row">
    <h2>{{ match.login }}'s followers:</h2>
      <div class="col-sm-6 col-md-4 col-lg-3" *ngFor="let follower of followers | async">
        <img [src]="follower.avatar_url" class="img-responsive thumbnail">
        <p><a [href]="follower.html_url" >{{ follower.login}}</a></p>
      </div>
    </div>
</div>`
})

export class GithubComponent {
  private searchTermStream = new Subject<string>();
  match: any;

  constructor(private http: Http) {
    this.match = {};
  }

  search(term: string) {
    console.log('this is typed: ', term);
    this.searchTermStream.next(term);
  }

  followers: Observable<any> = this.searchTermStream
    .do(x => console.log("value changes: ",x))
    // .debounceTime(300)
    // .do(x => console.log("after debounce: ", x))
    // .filter(v => v.length > 0)
    // .do(x => console.log("after filter: ", x))
    // .distinctUntilChanged()
    // .do(x => console.log("after distinct: ",x))
    // .map(query => makeURL(query))
    // .do(x => console.log("after makeURL ", x))
    // .switchMap(url => this.http.get(url).retryWhen( errors => errors.delay(2000)))
    // .do(x => console.log("after first switchmap: ", x))
    // .map((res: Response) => res.json())
    // .do(x => console.log("after first map: ", x))
    // // .filter(v => v.total_count > 0)
    // .map(response => {
    //   this.match = response.items[0];
    //   return response.items[0].followers_url;
    // })
    // .do(x => console.log("after getting followers_url: ", x))
    // .switchMap(url => this.http.get(url))
    // .do(x => console.log("after second switchmap: ", x))
    // .map((res: Response) => res.json().splice(0,3))
    // .do(x => console.log("after second map: ", x));
    // .subscribe(v => this.followers = v, e => console.log("error: ", e));
}


// this.searchInput.valueChanges
//   .debounceTime(200)
//   .map(query => makeURL(query))
//   .switchMap(url => this._http.get(url)
//     .retryWhen( errors => errors.scan((errorCount, err) => {
//       console.log("status: ", err.status);
//       if(errorCount >= 5 || err.status === 422) {throw err};
//       return errorCount + 1;
//     }, 0).delay(2000)))
//   .map((res: Response) => res.json())
//   .map(response => response.items[0].followers_url)
//   .subscribe(v => console.log(v), e => {console.log("error: ", e); this.errorMessage = JSON.parse(e._body).message;});
// }
