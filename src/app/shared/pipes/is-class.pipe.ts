import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isClass'
})
export class IsClassPipe implements PipeTransform {

  transform(value: boolean, className: string): string {
    return value ? className : "";
  }

}
