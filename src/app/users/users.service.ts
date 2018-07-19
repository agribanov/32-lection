import { Injectable } from '@angular/core';
import { Users, USERS, User } from './models/User';

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

  get(id: number): User{
    return this.users.find((u) => u.id === id)
  }
}
