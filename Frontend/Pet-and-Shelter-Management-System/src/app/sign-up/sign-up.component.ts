import { Component, OnInit, Renderer2 } from '@angular/core';
import { users } from '../objects/users';
// import { ServicService } from '../services/servic.service';
import {RegisterService} from '../services/registerService';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalPopServiceService } from '../services/modal-pop-service-service.service';
import { ShelterserviceService } from '../services/shelterService/shelterservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signup_user: any=new users();
  pow_password = -1;
  flag_choose_city = false;
  flag_choose_Shelter = false;
  // index_country = 0;
  flag_sign_up = true;

  Shelters = [
   "Pet Care Shelter",
   "New Shelter",
   "old Shelter"
  ];

  selectedRole: string= '';
  formData: any = {};
  shelterArray: any[] = []


  constructor(
    // user: users,
    private service: RegisterService,
    private router: Router,
    private pop_service: ModalPopServiceService,
    private serviceshelter: ShelterserviceService
  ) {
    // this.signup_user = user;
    this.serviceshelter.get_Shelter().subscribe((x) => {
      this.shelterArray=x;
      error: (error: HttpErrorResponse) => alert(error.message);
    });
    
  }

  ngOnInit(): void {}

  power_password(password: string) {
    // Define the regular expressions for each character type
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const digitRegex = /\d/;
    const specialRegex = /[@$!%*?&]/;

    if (password.length == 0) {
      this.pow_password = -1;
    } else if (
      (password.length >= 8 &&
        lowercaseRegex.test(password) &&
        uppercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialRegex.test(password)) ||
      password.length >= 18
    ) {
      this.pow_password = 3; // strong password
    } else if (
      password.length >= 8 &&
      (lowercaseRegex.test(password) || uppercaseRegex.test(password)) &&
      (digitRegex.test(password) || specialRegex.test(password))
    ) {
      this.pow_password = 2; // medium password
    } else if (password.length >= 8) {
      this.pow_password = 1; // weak password
    } else {
      this.pow_password = 0; // very weak password
    }
  }
  select_Shelter(value: any) {
    if (value == 'Select') {
      this.flag_choose_Shelter = false;
      this.signup_user.set_Shelter('');
    } else {
      this.flag_choose_Shelter = true;
      this.signup_user.set_Shelter(value);

    }
  }
  submit() {
    // this.service.user = this.signup_user;
    this.flag_sign_up = false;

    // this.service.sign_up(this.signup_user).subscribe((x) => {
    //   if (x.success == false) {
    //     this.pop_service.open_error_signup();
    //     this.flag_sign_up = true;
    //   } else {
    //     this.router.navigate([`/verify`]);
    //   }
    //   error: (error: HttpErrorResponse) => alert(error.message);
    // });
  }
  submitForm() {
  
    this.formData.roleInSystem = this.selectedRole;
    if(!this.isFormValid()){
      alert('Please fill all the required fields');
      return;
    }
    this.service.signup(this.formData).subscribe((x:any) => {
      console.log(x);
      if(x !=null){
        localStorage.setItem('token', x.token);
        localStorage.setItem('userName',this.formData.userName);
        localStorage.setItem('role',this.selectedRole);

        if(this.selectedRole == 'ADOPTER'){
          this.router.navigate(['/home']);
        }
        else if(this.selectedRole == 'MANGER'){
          this.router.navigate(['/admin_home/add_shelter']);
        }
        else if(this.selectedRole == 'STAFF'){
          this.router.navigate(['/staff_home/add_pet']);

        }
      }
      else 
        alert('Already SignedUp');
    });
    // Add your logic here to send the form data to the server or perform other actions.
  }
  isFormValid(): boolean {
    // Check if all required fields are filled based on your form structure
    return (
      this.formData.firstName &&
      this.formData.lastName &&
      this.formData.contactInfo &&
      this.formData.password &&
      this.formData.userName &&
      this.formData.roleInSystem&&
      ((this.selectedRole !== 'staff') ||
        (this.selectedRole === 'staff' &&
          this.formData.role &&
          this.formData.idOfShelter))
    );
  }

}
