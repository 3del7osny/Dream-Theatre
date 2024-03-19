import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/shared-service.service';

interface User {
  id :number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  email: string;
  password: string;
  firstName: string;
  lastName: string;
  registrationMessage: string;

  constructor(private localStorageService: LocalStorageService){

    this.email = "";
    this.password="";
    this.firstName= '';
    this.lastName='';
    this.registrationMessage ='';
  }



  register(): void {
    const users: User[] = this.localStorageService.getUsers();

    // Check if the email already exists in local storage
    const existingUser = users.find((user) => user.email === this.email);
    if (existingUser) {
      this.registrationMessage = 'You already have an account';
    } else {
      // Validate the form
      if (!this.email || !this.password || !this.firstName || !this.lastName) {
        this.registrationMessage = 'Please complete the form';
        return;
      }

      // Generate a unique ID for the new user
      const newUserId = this.generateUserId(users);

      const newUser: User = {
        id: newUserId,
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName
      };

      users.push(newUser);
      this.localStorageService.setUsers(users);
      this.registrationMessage = 'Registration Successful';

      this.email = '';
      this.password = '';
      this.firstName = '';
      this.lastName = '';
    }
  }

  private generateUserId(users: User[]): number {
    // Find the highest existing user ID
    const maxId = users.reduce((max, user) => (user.id > max ? user.id : max), 0);

    // Generate a new unique ID by incrementing the highest ID by 1
    return maxId + 1;
  }
}
