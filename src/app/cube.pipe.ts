import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  transform(value: any , ...args: unknown[]): unknown {
    return value*value*value;
  }

}
