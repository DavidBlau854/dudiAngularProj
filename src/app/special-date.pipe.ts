import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialDate'
})
export class SpecialDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): Date {
    const wrongTime = value * 0.1;
    return new Date(value);
  }

}
