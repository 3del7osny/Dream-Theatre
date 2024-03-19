import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
// import { BookingHistoryComponent } from './components/booking/booking-history/booking-history.component';
// import { BookingSummaryComponent } from './components/booking/booking-summary/booking-summary.component';
import { FooterComponent } from './components/footer/footer.component';
import { FoodComponent } from './components/food/food.component';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SeatComponent } from './components/seat/seat.component';
import { ErrorComponent } from './components/errors/error/error.component';
import { SharedModule } from './modules/shared/shared.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { LocalStorageService } from './services/shared-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    // BookingHistoryComponent,
    // BookingSummaryComponent,
    FoodComponent,
    LoginComponent,
    RegistrationComponent,
    SeatComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    SharedModule
  ],
  providers: [LocalStorageService ,],
  bootstrap: [AppComponent]
})
export class AppModule { }
