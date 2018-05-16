import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../service/auth/auth.service";

import 'rxjs/add/operator/map'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService,
    ) {
    }

    canActivate() {
        return this.authService.authState.map((user) => {
            if (!user) {
                this.router.navigate(['/auth/login'])
            }
            return !!user;
        });
    }
}