import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

// components
import {AuthFormComponent} from "./components/auth-form/auth-form.component";
// services
import {AuthService} from "./service/auth/auth.service";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        AuthFormComponent
    ],
    exports: [
        AuthFormComponent
    ]
})

export class SharedModule {
    // Prevents from having two instances of AuthService
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AuthService
            ]
        }
    }
}