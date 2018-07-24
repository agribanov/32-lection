import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User, Users } from '../models/User'
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  list: Users
  // @Output() itemSelect = new EventEmitter<User>()

  constructor(private usersService: UsersService) { }

  ngOnInit(){
    this.updateList()
  }

  updateList(){
    this.list= this.usersService.list();
  }

  onRowClick(user: User): void{
    // this.itemSelect.emit(user);
  }
}
