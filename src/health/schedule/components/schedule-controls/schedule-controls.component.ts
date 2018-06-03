import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'schedule-controls',
  styleUrls: ['schedule-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <div class="controls">
          <button
            type="button"
            (click)="moveDate(offset - 1)"
          >
              <img src="img/chevron-left.svg" alt="">
          </button>
          <p>{{selected | date:'yMMMMd'}}</p>
          <button
            type="button"
            (click)="moveDate(offset + 1)"
          >
              <img src="img/chevron-right.svg" alt="">
          </button>
      </div>
  `
})

export class ScheduleControlsComponent {

  offset = 0;

  @Input()
  selected: Date;

  @Output()
  move = new EventEmitter<number>();

  moveDate(offset: number) {
    this.offset = offset;
    this.move.emit(offset)
  }

}