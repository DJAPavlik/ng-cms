import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../users.service';
import { User } from '../user';
//1. import router
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  // May be problematic JUNKJUNKJUNK123
  getUser(id): void {
   // console.log('in getUser');
   // console.log(id);

    this.usersService.getUser(id).subscribe(
      (response:any) => {
     //   console.log(response);
        this.user = response.user;
      }
    );
  }   // end getUser(id)

  //3. Implement the deleteUser() method
deleteUser(id: string): void {
  if(confirm("Are you sure to delete " + this.user.username)) {
    this.usersService.deleteUser(id).subscribe(
      ()=>{this.router.navigate(['/users'])}
    );
  }
} // end deleteUser(id: ...)

}  // end class UserViewComponent definition