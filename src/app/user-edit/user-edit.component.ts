import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User;
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }
/**
 * This method gets a single user from the user array
 * 
 * @param id - object id of the user to retrieve
 */
  getUser(id): void {
    this.usersService.getUser(id).subscribe(
      (response:any) => {
        this.user = response.user
      }
    );
  }  // end getUser(id)

  response(response): void{
    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error.message;
    }

    if(response.success===true){
      // console.log('in user edit');
      // console.log(response);
      // console.log('---');
      this.router.navigate(['/users/view/', response.user._id]);
    }
  } // end response(response)

  onSubmit(): void {
    this.usersService.editUser(this.user).subscribe(
      (response) => {
        this.response(response)
      }
    );
  } // end onSubmit()

}   // end UserEditComponent
