import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddShelterComponent } from './add-shelter/add-shelter.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { ShowApplicationComponent } from './show-application/show-application.component';

const routes: Routes = [
  {
    path: 'signup',
    component:SignUpComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin_home',
    component: AdminHomeComponent,

    // canActivate: [GuardServiceService],

    children: [
      {
        path: 'add_shelter',
        component: AddShelterComponent,
      },
      {
        path: 'add_staff',
        component: AddStaffComponent,
      },
    ],
  },
  {
    path: 'staff_home',
    component: StaffHomeComponent,

    // canActivate: [GuardServiceService],

    children: [
      {
        path: 'add_pet',
        component: AddPetComponent,
      },
      {
        path: 'show_application',
        component: ShowApplicationComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
