import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'gen'
})
export class GenPipe implements PipeTransform {
    transform(arg1: any, arg2: any) {
        if(arg2 == 'male') {
            return `Mr. ${arg1}`;
        } else {
            return `Miss. ${arg1}`
        }
    }
}