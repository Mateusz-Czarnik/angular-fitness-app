import {Component, OnDestroy, OnInit} from "@angular/core";

import {Meal, MealsService} from "../../../shared/services/meals/meals.service";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {Store} from "store";

@Component({
    selector: 'meals',
    styleUrls: ['meals.component.scss'],
    template: `
        <div class="meals">
            <div class="meals__title">
                <h1>
                    <img src="/img/food.svg" alt="">
                    Your meals
                </h1>
                <a
                        class="btn__add"
                        [routerLink]="['../meals/new']"
                >
                    <img src="./img/add-white.svg" alt="">
                    New meal
                </a>
            </div>
            <div *ngIf="meals$ | async as meals; else loading;">
                <div class="message" *ngIf="!meals.length">
                    <img src="./img/face.svg" alt="">
                    No meals, add a new meal to start
                </div>
            </div>
            <ng-template #loading>
                <div class="message">
                    <img src="/img/loading.svg" alt="">
                    Fetching meals...
                </div>
            </ng-template>
        </div>
    `
})

export class MealsComponent implements OnInit, OnDestroy {
    meals$: Observable<Meal[]>;
    subscription: Subscription;

    constructor(
        private mealsService: MealsService,
        private store: Store
    ) {
    }

    ngOnInit() {
        this.meals$ = this.store.select<Meal[]>('meals')
        this.subscription = this.mealsService.meals$.subscribe();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }
}