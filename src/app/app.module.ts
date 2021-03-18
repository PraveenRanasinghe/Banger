import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerHomeComponent } from './components/customer/customer-home/customer-home.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { ViewVehicleComponent } from './components/admin/admin-home/view-vehicle/view-vehicle.component';
import { ViewEquipmentsComponent } from './components/admin/admin-home/view-equipments/view-equipments.component';
import { ViewBookingsComponent } from './components/admin/admin-home/view-bookings/view-bookings.component';
import { AddVehicleComponent } from './components/admin/admin-home/view-vehicle/add-vehicle/add-vehicle.component';
import { UpdateDeleteVehicleComponent } from './components/admin/admin-home/view-vehicle/update-delete-vehicle/update-delete-vehicle.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerHomeComponent,
    HomeComponent,
    NavBarComponent,
    ContactUsComponent,
    AboutUsComponent,
    SignUpComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminNavComponent,
    ViewVehicleComponent,
    ViewEquipmentsComponent,
    ViewBookingsComponent,
    AddVehicleComponent,
    UpdateDeleteVehicleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    BsDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
