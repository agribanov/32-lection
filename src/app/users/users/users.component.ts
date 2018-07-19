import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  page = 'list'
  list: Users

  constructor(private usersService: UsersService) { }

  ngOnInit(){
    this.list = this.usersService.list()
  }
  changePage(pageToGo: string): void {
    this.page = pageToGo;
  }

}
