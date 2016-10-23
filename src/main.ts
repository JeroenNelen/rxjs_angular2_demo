// import 'reflect-metadata'
// import 'zone.js'
// import {bootstrap} from '@angular/platform-browser'
// import {enableProdMode} from '@angular/core'
// import {App} from './app'
//
// // Config
// enableProdMode();
//
// // Bootstrap angular app
// bootstrap(App)
//   .catch(console.log.bind(console));

import 'zone.js';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
