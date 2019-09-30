import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';
import { User } from '../models/user.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  users: Array<User> = [];
  editForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    
  }

}
