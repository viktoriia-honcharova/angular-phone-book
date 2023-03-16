import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './phonebook.component';

@Pipe({
  name: 'search',
})
export class SearchnamePipe implements PipeTransform {
  transform(arrUsers: IUser[], field: string): IUser[] {
    if (!arrUsers) return [];
    if (!field) return arrUsers;
    return arrUsers.filter(
      (user) =>
        user.firstname.toLowerCase().includes(field.toLowerCase()) ||
        user.lastname.toLowerCase().includes(field.toLowerCase()) ||
        user.number.toLowerCase().includes(field.toLowerCase())
    );
  }
}
