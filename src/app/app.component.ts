import {Component, OnInit} from '@angular/core';
import {UserInterface} from './types/user.interface';
import {HttpClient} from '@angular/common/http';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'User List';

  users: UserInterface[] = [];

  constructor(private http: HttpClient, private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: UserInterface[]) => {
      this.users = users;
    });
  }

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
