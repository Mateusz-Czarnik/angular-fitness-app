import {Injectable} from "@angular/core";
import {Store} from "store";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import 'rxjs/add/observable/of'
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ScheduleService {

  private date$ = new BehaviorSubject(new Date());

  schedule$: Observable<any[]> = this.date$.do((next: any) => this.store.set('date', next));

  constructor(
    private store: Store
  ) {
  }
}