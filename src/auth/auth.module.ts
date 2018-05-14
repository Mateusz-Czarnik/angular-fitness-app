import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

// third-party modules
import {AngularFireModule, FirebaseAppConfig} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";

// shared modules
import {SharedModule} from "./shared/shared.module";

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            {path: '', pathMatch: 'full', redirectTo: 'login'},
            {path: 'login', loadChildren: './login/login.module#LoginModule'},
            {path: 'register', loadChildren: './register/register.module#RegisterModule'}
        ]
    }
];

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBmYZtMupUWJIyUESwMK75S30t8xQUDnGE",
    authDomain: "fitness-app-287e4.firebaseapp.com",
    databaseURL: "https://fitness-app-287e4.firebaseio.com",
    projectId: "fitness-app-287e4",
    storageBucket: "fitness-app-287e4.appspot.com",
    messagingSenderId: "14014771923"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})

export class AuthModule {

}