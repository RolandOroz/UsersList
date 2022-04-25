import {Component} from '@angular/core';
import {UserInterface} from './types/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User List';

  users: UserInterface[] = [
    {
      id: '1',
      name: 'Jack',
      age: 21
    },
    {
      id: '2',
      name: 'John',
      age: 25
    },
    {
      id: '3',
      name: 'Sam',
      age: 29
    }
  ];

  removeUser(id: string): void {
    // deleting user by id
    this.users = this.users.filter(user => user.id !== id);
  }

  addUser(name: string): void {
    const uniqueId = Math.random().toString(16);
    const newUser: UserInterface = {
      id: uniqueId,
      name,
      age: 30
    };
    this.users.push(newUser);
  }
}
