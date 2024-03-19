import { Injectable } from '@angular/core';
import { Router } from 'vue-router';
// import { FoodComponent } from '../components/food/food.component';
import { RegistrationComponent } from '../components/registration/registration.component';

interface Movie{
  title:string ;
  description:string;
  imgurl:string ;
}
interface User {
  id:number;
  email:string;
  password:string;
  firstname:string;
  lastname:string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getCurrentUser() {
    throw new Error('Method not implemented.');
  }
  private readonly storageKey ='users';
  private localStorageKey  ='movies';
  private foodKey = 'foodOrderData';

  getUsers(): any[] {
    const storedUsersString =localStorage.getItem(this.storageKey);
    return storedUsersString? JSON.parse(storedUsersString) : [];
  }
  setUsers(users: any[]):void {
    localStorage.setItem(this.storageKey ,JSON.stringify(users));
  }



  getMovies(): Movie[] {
    const storedMovies = localStorage.getItem(this.localStorageKey);
    return storedMovies ? JSON.parse(storedMovies) : [];
  }

  setMovies(movies: Movie[]) :void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(movies));
  }


    getItem(key: string): any {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }

    setItem(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    }

    removeItem(key: string): void {
      localStorage.removeItem(key);
    }

    getUserById(userId: number): User | undefined {
      // Implement your logic to retrieve the user from local storage or an API
      // Return the user object if found, or undefined if not found
      // Example implementation:
      const users: User[] = this.getItem('users') || [];
      return users.find(user => user.id === userId);
    }

  

    private seatKey = 'bookingData';

  saveData(data: any): void {
    localStorage.setItem(this.seatKey, JSON.stringify(data));
  }


    }




