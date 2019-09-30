import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(!this.authService.getAuthStatus()) {
      this.router.navigate(['login']);
    }
    
  }

}
