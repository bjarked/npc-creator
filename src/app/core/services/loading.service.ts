import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  count:number = 0;
  constructor() { }

  public startLoading () {
    this.count ++;
    this.loading$.next(true);
  }

  public stopLoading () {
    this.count--;
    if (this.count == 0){
      this.loading$.next(false)
    }
  }

}
