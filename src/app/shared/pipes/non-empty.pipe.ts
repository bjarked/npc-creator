import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nonEmpty'
})
export class NonEmptyPipe implements PipeTransform {

  transform<T>(value: T[]): boolean {
    return value.length > 0;
  }

}
