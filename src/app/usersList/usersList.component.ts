import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserInterface} from '../types/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './usersList.component.html',
  styleUrls: ['usersList.component.scss']
})

export class UsersListComponent {
// passing data from parent to child
  @Input() users: UserInterface[];
// passing data from child to parent
  @Output() removeUser = new EventEmitter<string>();
  @Output() addUserEvent = new EventEmitter<string>();

  newUserName = '';
  // moving to app.component.ts and using @Input instead
  // users = [
  //   {
  //     id: '1',
  //     name: 'Jack',
  //     age: 21
  //   },
  //   {
  //     id: '2',
  //     name: 'John',
  //     age: 25
  //   },
  //   {
  //     id: '3',
  //     name: 'Sam',
  //     age: 29
  //   }
  // ];

// moving to app.component.ts and using @Output instead
//   removeUser(id: string): void {
//     // deleting user by id
//     this.users = this.users.filter(user => user.id !== id);
//   }

  setNewUserName(userName: string): void {
    this.newUserName = userName;
  }

  addUser(): void {
    this.addUserEvent.emit(this.newUserName);
// sets value to empty string
    this.newUserName = '';
  }
}

