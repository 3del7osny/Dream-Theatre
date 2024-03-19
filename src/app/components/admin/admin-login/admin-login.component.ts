import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loggedIn: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {

    // Perform authentication logic here
    // You can use a service or API call to validate the admin credentials

    // For demonstration purposes, check if the username and password match a hardcoded value
    if (this.username === 'admin' && this.password === '123') {
      this.loggedIn = true;
this.router.navigate(['/dashboard']);
alert("Welcome Admin")


    } else {
      alert('Invalid username or password.');
      this.username ='';
      this.password=''
    }
  }
}
