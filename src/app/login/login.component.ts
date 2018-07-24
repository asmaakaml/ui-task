import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  firstname: string;
  lastname: string;
  constructor(private router: Router, public auth: AuthService) {
  }
  ngOnInit() {
  }
  loginUser() {
    this.firstname = this.loginForm.value.firstname;
    this.lastname = this.loginForm.value.lastname;
    console.log(this.firstname);
    console.log(this.lastname);
    this.router.navigate(['home']);
    this.auth.postUser(this.firstname, this.lastname);
    // window.location.reload();
  }
}
