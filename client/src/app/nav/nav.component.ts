import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() { }

  isAuth(): boolean {
    return this.authService.getAuthStatus();
  }
  isAdmin(): boolean {
    return this.authService.getAdminStatus();
  }
  onLogout(): void {
    this.authService.setAuthStatus(false);
    this.authService.setAdminStatus(false);
    this.router.navigate([""]);
  }

  goHere(route: string) : void {
    this.router.navigate([route]);
  }
}