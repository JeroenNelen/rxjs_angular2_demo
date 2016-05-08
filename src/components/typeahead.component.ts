import {Component, Inject} from 'angular2/core'
import {Control} from 'angular2/common'
import {Observable} from 'rxjs/Rx'
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';

const makeURL = (query) => `${BASE_URL}?q=${query}&part=snippet&key=${API_TOKEN}`

@Component({
  selector: 'typeahead',
  providers: [HTTP_PROVIDERS],
  style: `.typeahead-tile {
  height: 200px;
  text-align: center;
}`,
  template: `<h2>Search youtube</h2>
<input type="text" placeholder="search youtube..." class="form-control" [ngFormControl]="searchInput">
<br>
<div class="row">
  <div class="col-sm-6 col-md-4 col-lg-3 typeahead-tile" *ngFor="#video of videos | async" (click)="visit()">
    <img [src]="video.snippet.thumbnails.medium.url" class="img-responsive thumbnail">
    <p>{{ video.snippet.title }}</p>
  </div>
</div>`
})
export class TypeaheadComponent {

  videos: Observable<any []>;   // array of videos
  searchInput = new Control();  // search input control

  constructor(@Inject(Http) private _http: Http) {

    // Write code here

  }
}
