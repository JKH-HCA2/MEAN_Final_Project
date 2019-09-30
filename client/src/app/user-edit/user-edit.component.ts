  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user.service'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  
  email: string;
  uniqueId: number;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    // If user isn't logged in they are redirected to the login screen
    if(!this.authService.getAuthStatus()) {
      this.router.navigate(['login']);
    } else {
      // unique id is stored
      this.uniqueId = this.authService.getUniqueId();
      // user is called from the server
      this.userService.getUserById(this.uniqueId).subscribe(data => {
        this.email = data["email"];
      });
    }
  }

  onUpdate(): void {
    // Update user by calling user service
    this.userService.updateUser(this.uniqueId, this.email).subscribe(data => {
      this.router.navigate(["user-edit"]);
    });
  }

  onDelete(): void {
    // Delete user by calling user service
    this.userService.deleteUser(this.uniqueId).subscribe(data => {
      this.router.navigate([""]);
      // on deletion user auth/admin status's are revoked
      this.authService.setAuthStatus(false);
      this.authService.setAdminStatus(false);
    });
  }

}
