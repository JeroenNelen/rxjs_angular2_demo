import {Component, OnInit, EventEmitter} from 'angular2/core'
import {Http, HTTP_PROVIDERS} from "angular2/http";
import {Observable} from 'rxjs/Rx'

const API_URL = 'http://jsonplaceholder.typicode.com/posts';

@Component({
  selector: 'github',
  template: `<div class="container">
    <div class="header">
         <h2>Who to follow</h2><a href="#" class="refresh">Refresh</a>
    </div>
    <button id="tester"> This is clickable</button>
    <button (click)="clickStream.emit($event)"> This is clickable</button>
</div>`
})

export class GithubComponent implements OnInit {
  button: any;
  click: any;
  clickStream: EventEmitter<any>;

  constructor() {
    this.clickStream = new EventEmitter();
  }

  ngOnInit() {
    this.button = document.getElementById('tester');
    console.log("constructor: ", this.button);
    this.click = Observable.fromEvent(this.button,'click')
      .subscribe(v => console.log("click: ",v));

    this.clickStream.subscribe(v => console.log("eventEmitter: ", v));
  }
}
