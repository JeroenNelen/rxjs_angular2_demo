/**
 * Created by nelen on 23/10/16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BasicComponent} from "./components/basic.component";
import {TypeaheadComponent} from "./components/typeahead.component";
// import {GithubComponent} from "./components/github.component";
import {CreationComponent} from "./components/creation.component";
import {OperationComponent} from "./components/operation.component";
import {HotvscoldComponent} from "./components/hotvscold.component";
import {RedditComponent} from "./components/reddit.component";

const routes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: 'basic',  component: BasicComponent },
  { path: 'creation', component: CreationComponent },
  { path: 'operation',     component: OperationComponent },
  { path: 'hotvscold',     component: HotvscoldComponent },
  { path: 'typeahead',     component: TypeaheadComponent },
  // { path: 'github',     component: GithubComponent },
  { path: 'reddit',     component: RedditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
