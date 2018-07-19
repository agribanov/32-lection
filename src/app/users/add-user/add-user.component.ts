import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @Output() close = new EventEmitter<void>()

  user: User = new User;

  constructor(protected usersService: UsersService) { }

  closeForm(){
    this.close.emit();
  }

  onFormSave(user: User){
    this.usersService.set(user);
    this.closeForm();
  }

  onFormCancel(){
    this.closeForm();
  }
}
