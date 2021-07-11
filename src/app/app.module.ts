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
import { AddEquipmentComponent } from './components/admin/admin-home/equipment/add-equipment/add-equipment.component';
import { UpdateDeleteEquipComponent } from './components/admin/admin-home/equipment/update-delete-equip/update-delete-equip.component';
import { UsersComponent } from './components/admin/admin-home/users/users.component';
import { UpdateComponent } from './components/admin/admin-home/vehicle/update-delete/update/update.component';
import { DeleteComponent } from './components/admin/admin-home/vehicle/update-delete/delete/delete.component';
// import {AddToBlacklistComponent} from './components/admin/admin-home/users/add-to-blacklist/add-to-blacklist.component';
import { AcceptComponent } from './components/admin/admin-home/booking/accept/accept.component';
import { RejectComponent } from './components/admin/admin-home/booking/reject/reject.component';
import { UpdateEquipComponent } from './components/admin/admin-home/equipment/update-delete-equip/update-equip/update-equip.component';
import { DeleteEquipComponent } from './components/admin/admin-home/equipment/update-delete-equip/delete-equip/delete-equip.component';
import { CustomerNavComponent } from './components/customer/customer-nav/customer-nav.component';
import { UserAccountComponent } from './components/customer/customer-home/user-account/user-account.component';
import { ViewVehiclesComponent } from './components/customer/customer-home/view-vehicles/view-vehicles.component';
import { ViewBookingsComponent } from './components/customer/customer-home/view-bookings/view-bookings.component';
import { MakeBookingComponent } from './components/customer/customer-home/view-vehicles/make-booking/make-booking.component';
import { InquiryComponent } from './components/admin/admin-home/inquiry/inquiry.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PagePositionComponent } from './components/shared/page-position/page-position.component';
import { VerifyUsersComponent } from './components/admin/admin-home/users/verify-users/verify-users.component';
import { ViewUsersComponent } from './components/admin/admin-home/users/view-users/view-users.component';
import { AddToBlacklistComponent } from './components/admin/admin-home/users/view-users/add-to-blacklist/add-to-blacklist.component';
import { RemoveUserComponent } from './components/admin/admin-home/users/view-users/remove-user/remove-user.component';
import { VerifyViewMoreComponent } from './components/admin/admin-home/users/verify-users/verify-view-more/verify-view-more.component';
import { ExtendBookingComponent } from './components/customer/customer-home/view-bookings/extend-booking/extend-booking.component';
import { AdminServiceService } from './services/admin-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderService } from './services/header.service';
import { ViewMoreComponent } from './components/admin/admin-home/inquiry/view-more/view-more.component';
import { ViewMoreVehicleComponent } from './components/admin/admin-home/vehicle/update-delete/view-more-vehicle/view-more-vehicle.component';
import { RemoveInqComponent } from './components/admin/admin-home/inquiry/view-more/remove-inq/remove-inq.component';

// @ts-ignore
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
    AddEquipmentComponent,
    UpdateDeleteEquipComponent,
    UsersComponent,
    UpdateComponent,
    DeleteComponent,
    // AddToBlacklistComponent,
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
    PagePositionComponent,
    VerifyUsersComponent,
    ViewUsersComponent,
    AddToBlacklistComponent,
    RemoveUserComponent,
    VerifyViewMoreComponent,
    ExtendBookingComponent,
    ViewMoreComponent,
    ViewMoreVehicleComponent,
    RemoveInqComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    BsDropdownModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}
