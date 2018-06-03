import {Component, OnDestroy, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {ScheduleService} from "../../../shared/services/schedule/schedule.service";
import {Store} from "store";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'schedule',
  styleUrls: ['schedule.component.scss'],
  template: `
      <div class="schedule">
          <schedule-calendar
            [date]="date$ | async"
          ></schedule-calendar>
      </div>
  `
})

export class ScheduleComponent implements OnInit, OnDestroy {
  date$: Observable<Date>;
  subscriptions: Subscription[] = [];

  constructor(
    private scheduleService: ScheduleService,
    private store: Store
  ) {
  }

  ngOnInit() {
    this.date$ = this.store.select('date');

    this.subscriptions = [
      this.scheduleService.schedule$.subscribe()
    ]

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }


}