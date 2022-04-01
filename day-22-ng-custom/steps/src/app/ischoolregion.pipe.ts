import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'region'
})
export class IschoolregionPipe implements PipeTransform {

  transform(...args: any) {
    if (args[1] == 'central') {
      return `${args[0].title} is from Central India`;
    } else {
      return `${args[0].title} is from ${args[0].region}ern India`
    }
  }

}
