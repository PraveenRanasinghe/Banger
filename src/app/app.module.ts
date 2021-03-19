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
import { VehicleComponent } from './components/admin/admin-home/vehicle/vehicle.component';
import { EquipmentComponent } from './components/admin/admin-home/equipment/equipment.component';
import { BookingComponent } from './components/admin/admin-home/booking/booking.component';
import { AddVehicleComponent } from './components/admin/admin-home/vehicle/add-vehicle/add-vehicle.component';
import { UpdateDeleteComponent } from './components/admin/admin-home/vehicle/update-delete/update-delete.component';
import { BreadCrumbComponent } from './components/shared/bread-crumb/bread-crumb.component';
import { AddEquipmentComponent } from './components/admin/admin-home/equipment/add-equipment/add-equipment.component';
import { UpdateDeleteEquipComponent } from './components/admin/admin-home/equipment/update-delete-equip/update-delete-equip.component';
import { UsersComponent } from './components/admin/admin-home/users/users.component';
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
    VehicleComponent,
    EquipmentComponent,
    BookingComponent,
    AddVehicleComponent,
    UpdateDeleteComponent,
    BreadCrumbComponent,
    AddEquipmentComponent,
    UpdateDeleteEquipComponent,
    UsersComponent,
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
