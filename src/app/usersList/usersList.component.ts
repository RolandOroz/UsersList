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

  setNewUserName(userName: string): void {
    this.newUserName = userName;
  }

  addUser(): void {
    this.addUserEvent.emit(this.newUserName);
// sets value to empty string
    this.newUserName = '';
  }
}

