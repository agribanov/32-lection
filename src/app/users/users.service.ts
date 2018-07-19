import { Injectable } from '@angular/core';
import { Users, USERS } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Users
  
  constructor() {
    this.users = USERS;
  }

  list(): Users{
    return this.users;
  }
}
