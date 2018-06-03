import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'list-item',
  styleUrls: ['list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
      <div class="list-item">
          <a [routerLink]="getRoute(item)">
              <p class="list-item__name">{{item.name}}</p>
              <p class="list-item__ingredients">
                  <span *ngIf="item.ingredients; else showWorkout">{{ item.ingredients | join}}</span>
              </p>
              <ng-template #showWorkout>
                  <span>{{ item | workout }}</span>
              </ng-template>
          </a>
          <div
            class="list-item__delete"
            *ngIf="toggled"
          >
              <p>Delete item?</p>
              <button
                type="button"
                class="confirm"
                (click)="removeItem()"
              >Yes
              </button>
              <button
                type="cancel"
                class="confirm"
                (click)="toggle()"
              >No
              </button>
          </div>
          <button
            type="button"
            class="trash"
            (click)="toggle()"
          ><img src="/img/remove.svg" alt=""></button>
      </div>
  `
})

export class ListItemComponent {

  toggled = false;

  @Input()
  item: any;

  @Output()
  remove = new EventEmitter<any>();

  constructor() {

  }

  getRoute(item: any) {
    return [`../${item.ingredients ? 'meals' : 'workouts'}`, item.$key]
  }

  removeItem() {
    this.remove.emit(this.item)
  }

  toggle() {
    this.toggled = !this.toggled
  }
}