import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {UsersListModule} from 'src/app/usersList/usersList.module';
import {UsersService} from './services/users.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersListModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

