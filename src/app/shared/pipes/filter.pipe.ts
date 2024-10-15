import { Pipe, PipeTransform } from '@angular/core';
import {  map, Observable } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform<T>(value: Observable<T[]>, filter:(e:T)=>boolean): Observable<T[]> {
    return value.pipe(map(elements => elements.filter(filter)));
  }

}
