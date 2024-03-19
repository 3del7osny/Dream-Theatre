import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/shared-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email!: string;
  password!: string;
  loginMessage!: string;


  constructor(private localStorageService: LocalStorageService){
  this.email ='';
  this.password ='';
  this.loginMessage =''
  }




  login(): void {
    // Check if the entered email and password exist in local storage
    const users = this.localStorageService.getUsers();
    const foundUser = users.find(user=>user.email ===this.email && user.password === this.password);

    if (foundUser){

      this.loginMessage = 'Login Successful';
      window.location.href = "/home";
      //perform further actions or avigate to another page
    }else{
      this.loginMessage = 'Invalid email or password';
      //display error message or  perform other actions
    }

    this.email='';
    this.password='';
  }
}

