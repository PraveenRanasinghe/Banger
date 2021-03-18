import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { UpdateDeleteVehicleComponent } from './components/admin/admin-home/view-vehicle/update-delete-vehicle/update-delete-vehicle.component';
import { ViewVehicleComponent } from './components/admin/admin-home/view-vehicle/view-vehicle.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

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
        component:ViewVehicleComponent
      }
    ]
  },
  {
    path: 'updateDelete',
    component:UpdateDeleteVehicleComponent
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
