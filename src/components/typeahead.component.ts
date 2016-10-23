import {Component, Inject} from '@angular/core'
// import {Control} from '@angular/common'
// import {Observable, Subject} from 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Http, Response} from "@angular/http";
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_TOKEN = 'AIzaSyAJk1xUI72YYfBMgEc84gjHUX-k2AN6-B0';
const YOUTUBE_VIDEO_PREFIX = 'https://www.youtube.com/watch?v=';

const makeURL = (query) => `${BASE_URL}?q=${query}&part=snippet&key=${API_TOKEN}`

@Component({
  selector: 'typeahead',
  template: `<h2>Search youtube</h2>
      <input type="text" placeholder="search youtube..." #term class="form-control" (keyup)="search(term.value)">
      <br>
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 typeahead-tile" *ngFor="let video of videos | async" (click)="visit(video.id.videoId)">
          <img [src]="video.snippet.thumbnails.medium.url" class="img-responsive thumbnail">
          <p>{{ video.snippet.title }}</p>
        </div>
      </div>`
})
export class TypeaheadComponent {
  private searchTermStream = new Subject<string>();

  constructor(private http: Http) {
  }

  search(term: string) {
    console.log('this is typed: ', term);
    this.searchTermStream.next(term);
  }

  visit(videoId: string) {
    window.open(YOUTUBE_VIDEO_PREFIX + videoId);
  }

  videos: Observable<any[]> = this.searchTermStream
    .do(x => console.log("before debounce: ",x))
    .debounceTime(200)
    .do(x => console.log("after debounce: ",x))
    .map(query => makeURL(query))
    .do(x => console.log("after makeuRL: ",x))
    .switchMap(url => this.http.get(url))
    .do(x => console.log("after http.get: ",x))
    .map((res: Response) => res.json())
    .do(x => console.log("after res.json: ",x))
    .map(response => response.items);

}
