import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersNavComponent } from './users-nav/users-nav.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersService } from './users.service';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UsersComponent],
  providers: [UsersService],
  declarations: [UsersComponent, UsersNavComponent, UsersListComponent, AddUserComponent, EditUserComponent, UserFormComponent]
})
export class UsersModule { }
