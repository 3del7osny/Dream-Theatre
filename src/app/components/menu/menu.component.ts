import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

constructor(private router: Router) {}

  login(){
  this.router.navigate(['/login']);}

  signup(){
    this.router.navigate(['/reg']);}

  home(){
      this.router.navigate(['/home']);}

  history(){
        this.router.navigate(['/history']);}

}




