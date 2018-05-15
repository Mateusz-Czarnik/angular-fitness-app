import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
    selector: 'app-nav',
    styleUrls: ['app-nav.component.scss'],
    // Prevent component change
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="app-nav">
            <div class="wrapper">
                <a routerLink="schedule" routerLinkActive="active">Schedule</a>
                <a routerLink="meals" routerLinkActive="active">Meals</a>
                <a routerLink="workouts" routerLinkActive="active">Workouts</a>
            </div>
        </div>
    `
})

export class AppNavComponent {

}