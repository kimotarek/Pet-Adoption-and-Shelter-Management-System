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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
