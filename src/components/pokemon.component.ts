import {Component, Inject, OnInit} from 'angular2/core'
import {Http, HTTP_PROVIDERS, Response} from "angular2/http";
import {Observable} from "rxjs/Rx";

const API_URL = `http://pokeapi.co/api/v2/pokemon`;

@Component({
  selector: 'translate',
  template: `<h2>Pokemon!</h2>
<p>
  <button class="btn btn-primary" id="button" name="button">Gotta catch 'em all!</button>
</p>

<div class="row">
  <div class="col-xs-6 col-sm-4 col-md-3" *ngFor="#pokemon of pokemons">
    <div class="well well-sm">
       <p class="title">{{ pokemon.name }}</p>
       <img [src]="pokemon.sprites.front_default" alt="" class="img-responsive">
    </div>
  </div>
</div>`,
  providers: [HTTP_PROVIDERS]
})

export class PokemonComponent implements OnInit {

  pokemons: Array<any>;

  constructor(@Inject(Http) private _http: Http) {}

  ngOnInit() {

    let buttonElem = document.getElementById('button');

    // Create an observable when clicking
    let buttonClickStream = Observable.fromEvent(buttonElem, 'click');   // the button
    let windowClickStream = Observable.fromEvent(window, 'click');      // the window

    // Reset stream
    let resetStream = Observable.merge(buttonClickStream, windowClickStream);

    // Execute when clicking the button
    buttonClickStream

      // Fetch a list of pokemons
      .switchMap(() => this._http.get(API_URL))

      // Convert response to json & get the results array
      .flatMap((response: Response) => response.json().results)

      // Filter out pokemons who's name contains the letter 'a'
      .filter((result: any) => {
        return result.name.indexOf('a') !== -1
      })

      // Fetch details for these pokemon
      .flatMap((result: any) => this._http.get(result.url))

      // Convert response to json
      .map((response: Response) => response.json())

      // Only emit every 2 seconds
      .bufferTime(2000)

      // Flatten our array
      .flatMap(x => x)

      // Get the results
      .subscribe((pokemon:any) => this.pokemons.push(pokemon));

    // Reset when clicking the button or window + prevent spam clicking
    resetStream
      .debounceTime(100)
      .subscribe(() => {
        this.pokemons = []
      });
  }
}
