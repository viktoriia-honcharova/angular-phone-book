import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './phonebook.component';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(arrUsers: IUser[], sort: string, type: string): IUser[] {
    if (!arrUsers) return [];
    if (!sort) return arrUsers;
    if (!type) return arrUsers;
    if (type === 'firstname') {
      if (sort === 'asc') {
        return arrUsers.sort((a, b) =>
          a.firstname > b.firstname ? 1 : a.firstname < b.firstname ? -1 : 0
        );
      }
      return arrUsers.sort((a, b) =>
        a.firstname < b.firstname ? 1 : a.firstname > b.firstname ? -1 : 0
      );
    } else if (type === 'lastname') {
      if (sort === 'asc') {
        return arrUsers.sort((a, b) =>
          a.lastname > b.lastname ? 1 : a.lastname < b.lastname ? -1 : 0
        );
      }
      return arrUsers.sort((a, b) =>
        a.lastname < b.lastname ? 1 : a.lastname > b.lastname ? -1 : 0
      );
    } else {
      if (sort === 'asc') {
        return arrUsers.sort((a, b) =>
          a.number > b.number ? 1 : a.number < b.number ? -1 : 0
        );
      }
      return arrUsers.sort((a, b) =>
        a.number < b.number ? 1 : a.number > b.number ? -1 : 0
      );
    }
  }
}
