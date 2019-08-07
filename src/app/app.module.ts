import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { UserViewComponent } from './user-view/user-view.component';
import { UserCreateComponent } from './user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserViewComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
