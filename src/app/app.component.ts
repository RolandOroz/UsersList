import {Component, OnInit} from '@angular/core';
import {UserInterface} from './types/user.interface';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'User List';

  users: UserInterface[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: UserInterface[]) => {
      console.log('users', users);
      this.users = users;
    });
  }

  removeUser(id: string): void {
    // deleting user by id
    this.usersService.removeUser(id).subscribe(() => {
      console.log('deleted from backend');
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  addUser(name: string): void {
    this.usersService.addUser(name).subscribe(newUser => {
      this.users.push(newUser);
    });
    // const uniqueId = Math.random().toString(16);
    // const newUser: UserInterface = {
    //   id: uniqueId,
    //   name,
    //   age: 30
    // };
  }
}
