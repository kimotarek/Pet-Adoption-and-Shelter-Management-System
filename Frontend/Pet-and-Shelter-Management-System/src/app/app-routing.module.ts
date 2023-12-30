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
import { AddBreedComponent } from './add-breed/add-breed.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { NotificationComponent } from './notification/notification.component';
import { PetHomeComponent } from './pet-home/pet-home.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { StaffApplicationComponent } from './staff-application/staff-application.component';
import { StaffRecordComponent } from './staff-record/staff-record.component';

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
        path:'addBreed',
        component: AddBreedComponent,
      },
      {
        path: 'Applications',
        component: StaffApplicationComponent,
      },
      {
        path: 'record',
        component: StaffRecordComponent,
      }
    ],
  },
  {
    path: 'user_home',
    component: UserHomeComponent,

    // canActivate: [GuardServiceService],

    children: [
      {
        path: 'notification',
        component: NotificationComponent,
      },
      
    ],
  },
  {
    path: 'pet_home',
    component: PetHomeComponent,

    // canActivate: [GuardServiceService],

    children: [
      {
        path: 'pet_profile',
        component: PetProfileComponent,
      },
      
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
