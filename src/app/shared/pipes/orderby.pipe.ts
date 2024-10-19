import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform<T>(value: Observable<T[] | null> , compare:(a:T,b:T) => number):  Observable<T[] | null>  {
    return  value.pipe(map(items => items ? items.sort(compare) : items));
  }

}
