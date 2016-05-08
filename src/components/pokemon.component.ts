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

    // Button element
    let buttonElem = document.getElementById('button');

    // Write code here
  }
}
