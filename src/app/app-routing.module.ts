import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { BookingComponent } from './components/admin/admin-home/booking/booking.component';
import { EquipmentComponent } from './components/admin/admin-home/equipment/equipment.component';
import { UpdateDeleteEquipComponent } from './components/admin/admin-home/equipment/update-delete-equip/update-delete-equip.component';
import { UsersComponent } from './components/admin/admin-home/users/users.component';
import { UpdateDeleteComponent } from './components/admin/admin-home/vehicle/update-delete/update-delete.component';
import { VehicleComponent } from './components/admin/admin-home/vehicle/vehicle.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contactUs',
    component:ContactUsComponent
  },
  {
    path:'aboutUs',
    component:AboutUsComponent
  },
  {
    path:'admin',
    component:AdminHomeComponent,
    children:[
      {
        path:'viewVehicle',
        component:VehicleComponent
      },
      {
        path:'updateDeleteVehicle',
        component:UpdateDeleteComponent
      },
      {
        path:'viewEquipment',
        component:EquipmentComponent
      },
      {
        path:'updateDeleteEquip',
        component:UpdateDeleteEquipComponent
      },
      {
        path:'viewBookings',
        component:BookingComponent
      },
      {
        path:'viewUsers',
        component:UsersComponent
      }
    ]
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path: "**",
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
