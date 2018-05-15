import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "store";
import {AuthService, User} from "../../../auth/shared/service/auth/auth.service";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div>
            <app-header
                    [user]="user$ | async"
                    (logout)="onLogout()"
            >

            </app-header>
            <app-nav
                    *ngIf="(user$ | async)?.authenticated"
            >

            </app-nav>
            <div class="wrapper">
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})
export class AppComponent implements OnInit, OnDestroy {
    user$: Observable<User>;
    subscription: Subscription;

    constructor(
        private store: Store,
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.subscription = this.authService.auth$.subscribe();
        this.user$ = this.store.select<User>('user')
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    async onLogout() {
        console.log('Logout.')
        await this.authService.logoutUser()
        this.router.navigate(['/auth/login'])
    }
}
