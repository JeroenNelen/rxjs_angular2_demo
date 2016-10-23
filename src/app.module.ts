/**
 * Created by nelen on 23/10/16.
 */
// angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// local
import { AppRoutingModule } from './app-routing.module';
import {App} from './app.component'

// components
import {BasicComponent} from "./components/basic.component";
import {TypeaheadComponent} from "./components/typeahead.component";
import {GithubComponent} from "./components/github.component";
import {CreationComponent} from "./components/creation.component";
import {OperationComponent} from "./components/operation.component";
import {HotvscoldComponent} from "./components/hotvscold.component";
import {RedditComponent} from "./components/reddit.component";

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  declarations: [
    App,
    BasicComponent,
    TypeaheadComponent,
    GithubComponent,
    CreationComponent,
    OperationComponent,
    HotvscoldComponent,
    RedditComponent
  ],
  imports:
    [
      AppRoutingModule,
      BrowserModule,
      FormsModule,
      HttpModule,
      ReactiveFormsModule,
      RouterModule.forRoot([{
        component: BasicComponent,
        path: 'typeahead'
        }
      ])
    ],
  bootstrap: [App]
})
export class AppModule { }
