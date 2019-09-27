import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../providers/auth.service';
import { UserService } from './../providers/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle = 'Login';
  username: string = '';
  password: string = '';

  error: boolean = false;
  errMsg: string = '';

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {}

  onSubmit(): void {
    if (this.username == '') {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.password == '') {
      this.errMsg = 'Password is required.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

      // Call UserService to authenticate
      this.userService.login(this.username, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Login unsuccessful.';
          this.error = true;
          this.authService.setAuthStatus(false);
        } else {
          this.authService.setAuthStatus(true);
          this.router.navigate(['teams']);
        }
      });
    }
  }

  onReset(): void {
    this.username = '';
    this.password = '';

    this.error = false;
    this.errMsg = '';
  }

}
