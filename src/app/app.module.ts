import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { UsersModule } from './users/users.module';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UsersComponent } from './users/users/users.component';

const routes:Routes = [
  {path:'', redirectTo: '/users', pathMatch: 'full'},
  {path:'calculator', component: CalculatorComponent},
  {path: 'users', component: UsersComponent, children: [
    {path:'', component: UsersListComponent},
    {path:'add', component: AddUserComponent},
    {path:':id', component: EditUserComponent}
  ]},

  {path:'**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CalculatorModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
