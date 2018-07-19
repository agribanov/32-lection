import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User, Users } from '../models/User'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input() list: Users
  @Output() itemSelect = new EventEmitter<User>()

  constructor() { }

  onRowClick(user: User): void{
    this.itemSelect.emit(user);
  }
}
