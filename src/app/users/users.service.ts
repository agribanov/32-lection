import { Injectable } from '@angular/core';
import { Users, USERS, User } from './models/User';
const apiUrl = 'https://5b2153d4ca762000147b2730.mockapi.io/users'

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

  set(user: User): User{
    return user.id ? this.update(user) : this.add(user);
  }

  update(user: User): User{
    const index = this.users.findIndex(((u)=> u.id === user.id));

    this.users = [
      ...this.users.slice(0, index),
      user,
      ... this.users.slice(index + 1)
    ];

    return user;
  }

  add(user: User): User{
    user.id = Date.now();

    this.users = [...this.users, user]

    return user;
  }
}
