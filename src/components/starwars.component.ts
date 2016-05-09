import {Component, Inject, OnInit} from 'angular2/core'
import {Http, HTTP_PROVIDERS, Response} from "angular2/http";
import {Observable} from "rxjs/Rx";

const API_URL_SWAPI = 'http://swapi.co/api/films/';
const API_URL_OMDB = 'http://www.omdbapi.com/?s=';
const getMovieDetailsURL = (movieName) => API_URL_OMDB + movieName;

@Component({
  selector: 'star-wars',
  template: `<h2></h2>
<p>
  <button class="btn btn-primary" id="button" name="button">Fetch movies</button>
</p>

<hr>

<div class="row">
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" *ngFor="#movie of movies">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">{{ movie.Title }} ({{ movie.Year }})</h3>
      </div>
      <div class="panel-body">
        <img [src]="movie.Poster" alt="" class="img-responsive">
      </div>
    </div>
  </div>
</div>`,
  providers: [HTTP_PROVIDERS]
})

export class StarwarsComponent implements OnInit {

  movies: Array<any>;

  constructor(@Inject(Http) private _http: Http) {}

  ngOnInit() {

    // Button element
    let buttonElem = document.getElementById('button');

    // Reset stream
    Observable.fromEvent(window, 'click').subscribe(() => this.movies = []);

    // Fetch movies stream
    Observable.fromEvent(buttonElem, 'click')

      // Prevent spam clicking
      .debounceTime(300)

      // Fetch movies from SWAPI
      .switchMap(() => this._http.get(API_URL_SWAPI))

      // Convert response to JSON
      .map((response: Response) => response.json())

      // Take out the 'results' array & flatten it to separate items
      .flatMap((response: any) => response.results)

      // Get detailed information for each of the movies
      .flatMap((movie: any) => this._http.get(getMovieDetailsURL(movie.title)))

      // Convert response to JSON
      .map((response: Response) => response.json())

      // Take out the first item in the 'Search' array
      .map((response: any) => response.Search[0])

      // Filter out the movies where Type is 'movie'
      .filter((movie: any) => movie.Type === 'movie')

      // Set the movies
      .subscribe((movie: any) => this.movies.push(movie));
  }
}
