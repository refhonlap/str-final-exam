import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(users: Array<User>, column?: string, reverse?: boolean): Array<User> {

    // First we need to sort an Array.
    if (column === 'id') {
      users.sort((e1, e2) => e1.id - e2.id);
    }
    else if (column === 'name') {
      users.sort((u1, u2) => u1.name.localeCompare(u2.name));
    }
    else if (column === 'email') {
      users.sort((u1, u2) => u1.email.localeCompare(u2.email));
    }
    else if (column === 'address') {
      users.sort((u1, u2) => u1.address.localeCompare(u2.address));
    }
    else if (column === 'active') {
      users.sort((u1, u2) => u1.address.localeCompare(u2.address));
    }

    // Reverse Array after sorting.
    // If flag is true then only reverse it.
    if (reverse) {
      users.reverse();
    }
    return users;
  }

}
