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
    .do(x => console.log("value changes: ",x));
}

