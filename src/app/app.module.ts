import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {UsersListModule} from 'src/app/usersList/usersList.module';
import {UsersService} from './services/users.service';
import {LoginModule} from '../login/login.module';
import {RegisterModule} from '../register/register.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersListModule,
    LoginModule,
    RegisterModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

