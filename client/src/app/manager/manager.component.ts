import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';
import { UserService } from '../providers/user.service';

import { User } from '../models/user.model';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  users: Array<User> = [];

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.getAdminStatus()) {
      this.router.navigate(['login']);
    } else {
      this.userService.getUsers().subscribe(data => {
        data.forEach((user, index) => {
          this.users.push(new User(user.id, user.username, user.email))
        })
      })
    }    
  }
}
