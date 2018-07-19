import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() userId: number

  user: User

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.user = this.usersService.get(this.userId);
  }

}
