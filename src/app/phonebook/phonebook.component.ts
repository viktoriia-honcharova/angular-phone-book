import { Component } from '@angular/core';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css'],
})
export class PhonebookComponent {
  public showModal = false;
  public field = '';
  public currentIndex!: number;
  public editStatus = false;

  public currentName!: string;
  public currentLastName!: string;
  public currentNumber!: string;

  public type = 'asc';
  public sortType!: string;
  public arrowF = '';
  public arrowL = '';
  public arrowN = '';

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

  cleanData(): void {
    this.currentName = '';
    this.currentLastName = '';
    this.currentNumber = '';
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }

  editUser(index: number): void {
    this.editStatus = true;
    this.showModal = true;
    this.currentIndex = index;
    this.currentName = this.users[index].firstname;
    this.currentLastName = this.users[index].lastname;
    this.currentNumber = this.users[index].number;
  }

  saveEditUser(): void {
    let editedUser = {
      firstname: this.currentName,
      lastname: this.currentLastName,
      number: this.currentNumber,
    };
    this.users[this.currentIndex] = editedUser;

    this.editStatus = false;
    this.showModal = false;

    this.cleanData();
  }

  addUser(): void {
    let user = {
      firstname: this.currentName,
      lastname: this.currentLastName,
      number: this.currentNumber,
    };
    this.users.push(user);
    this.showModal = false;
  }

  changeSort(sortT: string) {
    if (this.type === 'asc') {
      this.type = 'desc';
    } else {
      this.type = 'asc';
    }
    if (this.type === 'asc' && sortT === 'firstname') {
      this.arrowF = '▼';
      this.arrowL = '';
      this.arrowN = '';
    } else if (this.type === 'desc' && sortT === 'firstname') {
      this.arrowF = '▲';
      this.arrowL = '';
      this.arrowN = '';
    }
    if (this.type === 'asc' && sortT === 'lastname') {
      this.arrowL = '▼';
      this.arrowF = '';
      this.arrowN = '';
    } else if (this.type === 'desc' && sortT === 'lastname') {
      this.arrowL = '▲';
      this.arrowF = '';
      this.arrowN = '';
    }
    if (this.type === 'asc' && sortT === 'number') {
      this.arrowN = '▼';
      this.arrowL = '';
      this.arrowF = '';
    } else if (this.type === 'desc' && sortT === 'number') {
      this.arrowN = '▲';
      this.arrowL = '';
      this.arrowF = '';
    }
    this.sortType = sortT;
  }
}

export interface IUser {
  firstname: string;
  lastname: string;
  number: string;
}
