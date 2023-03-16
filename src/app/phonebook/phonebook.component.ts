import { Component } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css'],
})
export class PhonebookComponent {
  public editStatus = false;
  public showModal = true;
  formModal: any;
  public field = '';
  public users: IUser[] = [
    {
      firstname: 'Viktoriia',
      lastname: 'Honcharova',
      number: '0976543219',
    },
    {
      firstname: 'Kobe',
      lastname: 'Claeke',
      number: '3748091278',
    },
    {
      firstname: 'Linda',
      lastname: 'Small',
      number: '9075780233',
    },
    {
      firstname: 'Wilma',
      lastname: 'Mckay',
      number: '1445908766',
    },
    {
      firstname: 'Taha',
      lastname: 'Mitchell',
      number: '5560983321',
    },
  ];
  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }

  editUser(index: number): void {}
}

export interface IUser {
  firstname: string;
  lastname: string;
  number: string;
}
