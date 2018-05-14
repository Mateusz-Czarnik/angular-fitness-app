import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./containers/login/login.component";
import {SharedModule} from "../shared/shared.module";

export const ROUTES: Routes = [
    {path: '', component: LoginComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    declarations: [
        LoginComponent
    ]
})

export class LoginModule {

}