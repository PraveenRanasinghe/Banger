import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxSpinnerModule} from 'ngx-spinner';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerHomeComponent} from './components/customer/customer-home/customer-home.component';
import {HomeComponent} from './components/home/home.component';
import {NavBarComponent} from './components/shared/nav-bar/nav-bar.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LoginComponent} from './components/login/login.component';
import {AdminHomeComponent} from './components/admin/admin-home/admin-home.component';
import {AdminNavComponent} from './components/admin/admin-nav/admin-nav.component';
import {VehicleComponent} from './components/admin/admin-home/vehicle/vehicle.component';
import {EquipmentComponent} from './components/admin/admin-home/equipment/equipment.component';
import {BookingComponent} from './components/admin/admin-home/booking/booking.component';
import {AddVehicleComponent} from './components/admin/admin-home/vehicle/add-vehicle/add-vehicle.component';
import {UpdateDeleteComponent} from './components/admin/admin-home/vehicle/update-delete/update-delete.component';
import {BreadCrumbComponent} from './components/shared/bread-crumb/bread-crumb.component';
import {AddEquipmentComponent} from './components/admin/admin-home/equipment/add-equipment/add-equipment.component';
import {UpdateDeleteEquipComponent} from './components/admin/admin-home/equipment/update-delete-equip/update-delete-equip.component';
import {UsersComponent} from './components/admin/admin-home/users/users.component';
import {UpdateComponent} from './components/admin/admin-home/vehicle/update-delete/update/update.component';
import {DeleteComponent} from './components/admin/admin-home/vehicle/update-delete/delete/delete.component';
import {AddToBlacklistComponent} from './components/admin/admin-home/users/add-to-blacklist/add-to-blacklist.component';
import {AcceptComponent} from './components/admin/admin-home/booking/accept/accept.component';
import {RejectComponent} from './components/admin/admin-home/booking/reject/reject.component';
import {UpdateEquipComponent} from './components/admin/admin-home/equipment/update-delete-equip/update-equip/update-equip.component';
import {DeleteEquipComponent} from './components/admin/admin-home/equipment/update-delete-equip/delete-equip/delete-equip.component';
import {CustomerNavComponent} from './components/customer/customer-nav/customer-nav.component';
import {UserAccountComponent} from './components/customer/customer-home/user-account/user-account.component';
import {ViewVehiclesComponent} from './components/customer/customer-home/view-vehicles/view-vehicles.component';
import {ViewBookingsComponent} from './components/customer/customer-home/view-bookings/view-bookings.component';
import {MakeBookingComponent} from './components/customer/customer-home/view-vehicles/make-booking/make-booking.component';
import {InquiryComponent} from './components/admin/admin-home/inquiry/inquiry.component';
import {HttpClientModule} from "@angular/common/http";

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
    UpdateComponent,
    DeleteComponent,
    AddToBlacklistComponent,
    AcceptComponent,
    RejectComponent,
    UpdateEquipComponent,
    DeleteEquipComponent,
    CustomerNavComponent,
    UserAccountComponent,
    ViewVehiclesComponent,
    ViewBookingsComponent,
    MakeBookingComponent,
    InquiryComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    BsDropdownModule,
    HttpClientModule,






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
