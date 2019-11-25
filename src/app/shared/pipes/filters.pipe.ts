import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(arr: Array<IUser>, val: any): any {
    if (!arr) return [];
    if(!val || val.length == 0) return arr;
    const newArr = arr.filter(it =>
      (it.fName.toLowerCase().indexOf(val.toLowerCase()) != -1) ||
      (it.lName.toLowerCase().indexOf(val.toLowerCase()) != -1) ||
      (it.numPhone.indexOf(val) != -1))
    return newArr;
  }

}
