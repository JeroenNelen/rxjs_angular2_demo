import {Component, OnInit, Inject} from 'angular2/core'
import {Control} from 'angular2/common'
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import {Observable} from 'rxjs/Rx'

const API_URL = 'https://api.github.com/search/users';
const makeURL = (query) => `${API_URL}?q=${query}`

@Component({
  selector: 'github',
  providers: [HTTP_PROVIDERS],
  template: `<div class="container">
    <div class="header">
         <h2>Who's following our first result</h2>
    </div>
    <input type="text" placeholder="search github..." class="form-control" [ngFormControl]="searchInput">
    <div *ngIf="match.login" class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <h2><a [href]="match.html_url" >{{ match.login }}</a></h2>
        <img [src]="match.avatar_url" class="img-responsive thumbnail">
      </div>
    </div>
    <div *ngIf="match.login" class="row">
    <h2>{{ match.login }}'s followers:</h2>
      <div class="col-sm-6 col-md-4 col-lg-3" *ngFor="#follower of followers">
        <img [src]="follower.avatar_url" class="img-responsive thumbnail">
        <p><a [href]="follower.html_url" >{{ follower.login}}</a></p>
      </div>
    </div>
</div>`
})

export class GithubComponent {
  searchInput = new Control();
  followers: Observable<any []>;
  match: any;

  constructor(@Inject(Http) private _http: Http) {
    // code here
  }
}
