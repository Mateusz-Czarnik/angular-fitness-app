import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "store";
import {AuthService, User} from "../../../auth/shared/service/auth/auth.service";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div>
            {{ user$ | async | json }}
            Hello Ultimate Angular!
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
    ) {
    }

    ngOnInit() {
        this.subscription = this.authService.auth$.subscribe();
        this.user$ = this.store.select<User>('user')
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
