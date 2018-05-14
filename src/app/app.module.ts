import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {Store} from 'store';

// feature modules
import {AuthModule} from "../auth/auth.module";

// containers
import {AppComponent} from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        AuthModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        Store
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

// var config = {
//     apiKey: "AIzaSyBmYZtMupUWJIyUESwMK75S30t8xQUDnGE",
//     authDomain: "fitness-app-287e4.firebaseapp.com",
//     databaseURL: "https://fitness-app-287e4.firebaseio.com",
//     projectId: "fitness-app-287e4",
//     storageBucket: "fitness-app-287e4.appspot.com",
//     messagingSenderId: "14014771923"
// };
