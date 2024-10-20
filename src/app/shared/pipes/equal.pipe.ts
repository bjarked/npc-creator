import { Pipe, PipeTransform } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';

@Pipe({
  name: 'equal'
})
export class EqualPipe implements PipeTransform {

  transform<T>(value: Observable<T>, equal: T): Observable<boolean> {
    return value.pipe(map(v => v== equal));
  }

}
