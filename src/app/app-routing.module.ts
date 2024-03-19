import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { ErrorComponent } from './components/errors/error/error.component';
import { FoodComponent } from './components/food/food.component';
import { SeatComponent } from './components/seat/seat.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'admin',component:AdminLoginComponent},
  {path:'dashboard',component:AdminDashboardComponent},
  {path:'food',component:FoodComponent},
  {path:'seat' , component:SeatComponent},
  {path:'**',component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
