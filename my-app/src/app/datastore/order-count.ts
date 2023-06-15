import { BehaviorSubject, Observable } from 'rxjs';

export interface CountType {
  itemCount: number;
}

export class OrderService {
  private _itemCount = new BehaviorSubject<CountType>({ itemCount: 0 });
  private _itemCount$ = this._itemCount.asObservable();

  getItemCount(): Observable<CountType> {
    return this._itemCount$;
  }

  setItemCount(count: CountType) {
    return this._itemCount.next(count);
  }
}
