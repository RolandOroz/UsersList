import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User List';

  users = [
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

}
