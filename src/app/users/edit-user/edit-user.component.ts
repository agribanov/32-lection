import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../users.service';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent extends AddUserComponent implements OnInit {
  user: User = new User;

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    const id = +this.route.snapshot.params.id;

    this.user = this.usersService.get(id);
  }
}
