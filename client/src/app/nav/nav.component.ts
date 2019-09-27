import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  isAuth(): boolean {
    return this.userService.getAuthStatus()
  }
  goHome() {
    this.router.navigate([''])
  }
  goTeams() {
    this.router.navigate(['teams'])
  }
  goRegister() {
    this.router.navigate(['register'])
  }
  goLogin() {
    this.router.navigate(['login'])
  }
  goManager() {
    this.router.navigate(['manager'])
  }
}
