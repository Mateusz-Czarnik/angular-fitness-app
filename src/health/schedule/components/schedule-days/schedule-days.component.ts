import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'schedule-days',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['schedule-days.component.scss'],
  template: `
      <div class="days">
          <button
            *ngFor="let day of days; index as i;"
            type="button"
            class="day"
            (click)="selectDay(i)"
          >
              <span [class.active]="i === selected">
                  {{day}}
              </span>
          </button>
      </div>
  `
})

export class ScheduleDaysComponent {

  days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  @Input()
  selected: number;

  @Output()
  select = new EventEmitter<number>();

  private selectDay(index: number) {
    this.select.emit(index)
  }
}