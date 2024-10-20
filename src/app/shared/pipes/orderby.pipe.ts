import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'orderby',
})
export class OrderbyPipe implements PipeTransform {

  transform<T extends any, U extends  T[] | Observable<T[] | null> | null >(value: U , compare:(a:T,b:T) => number):  U  {
    const returnValue = !value
      ? null
      : Array.isArray(value)
        ? Array.from(value).sort(compare)
        : value.pipe(map(items => items ? Array.from(items).sort(compare) : items));
    return returnValue as U;
  }

}
