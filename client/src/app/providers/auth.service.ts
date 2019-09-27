import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth: boolean = false;
  private isAdmin: boolean = false;
  constructor() {}

  setAuthStatus(status: boolean) {
    this.isAuth = status;
  }

  getAuthStatus() {
    return this.isAuth;
  }

  setAdminStatus(status: boolean) {
    this.isAdmin = status;
  }

  getAdminStatus() {
    return this.isAdmin;
  }
}