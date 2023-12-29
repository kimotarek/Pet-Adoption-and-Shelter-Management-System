import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddShelterComponent } from './add-shelter/add-shelter.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { ShowApplicationComponent } from './show-application/show-application.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBreedComponent } from './add-breed/add-breed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PopUpComponent,
    SignUpComponent,
    HomeComponent,
    AdminHomeComponent,
    AddShelterComponent,
    AddStaffComponent,
    StaffHomeComponent,
    AddPetComponent,
    ShowApplicationComponent,
    AddBreedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
