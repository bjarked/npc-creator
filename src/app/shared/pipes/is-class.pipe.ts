import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'isClass'
})
export class IsClassPipe implements PipeTransform {

  transform(value: boolean |null, className: string): string {
    return value ? className : "";
  }

}
