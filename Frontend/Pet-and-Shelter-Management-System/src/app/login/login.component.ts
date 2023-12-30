import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { RegisterService } from '../services/registerService';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ModalPopServiceService } from '../services/modal-pop-service-service.service';
import { users } from '../objects/users';
import { catchError } from 'rxjs/internal/operators/catchError';
declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user_login: any=new users();
  power = -1;
  pop_up: any;
  selectedOption:any = ''
  formData: any = {};
  flag_show_login = false;
  flag_btn_login = true;
  signature: String = '';
  code: any;
  constructor(
    // user: users,
    private service: RegisterService,
    private router: Router,
    private pop_service: ModalPopServiceService,
    private route: ActivatedRoute
  ) {
    this.flag_show_login = true;

    // this.user_login = user;
    // this.service.is_signin().subscribe((x) => {
    //   if (x.signed_in == 1) {
    //     this.router.navigate(['home/home_bar']);
    //   } else if (x.signed_in == 2) {
    //     this.router.navigate(['admin_home/admin_location']);
    //   } else {
    //     this.flag_show_login = true;
    //   }
    // });

  }

  ngOnInit() {}

  onSubmit() {
    //  service with user_login
    this.flag_btn_login = false;
    if (this.formData.role !== '' && this.formData.role != null && this.formData.userName && this.formData.password) {
      console.log(this.formData);
      this.service.login(this.formData).pipe(
        catchError((error) => {
          if (error.status === 403) {
            // Handle 403 Forbidden error here
            console.log('Access Forbidden!');
            alert('user not found, check that you are choosing the right role or sign up first')
          } else {
            // Handle other HTTP errors
            console.error('HTTP Error:', error.status);
          }
    
          // Rethrow the error to propagate it further if needed
          return of(null); // or throw error; depending on your use case
        })
      ).subscribe((response:any) => {
        
        if (response) {
          // Handle successful response
          localStorage.setItem('token', response.token);
          localStorage.setItem('userName', this.formData.userName);
          localStorage.setItem('role',this.formData.role);
          if(this.formData.role == 'ADOPTER'){
            this.router.navigate(['/home']);
          }
          else if(this.formData.role == 'MANGER'){
            this.router.navigate(['/admin_home/add_shelter']);
          }
          else if(this.formData.role == 'STAFF'){
            this.router.navigate(['/staff_home/add_pet']);
  
          }
        }
        else{
            alert('user not found, check that you are choosing the right role or sign up first')
        }
      });
    }
  }

  forget_pass_first_step(email: any) {
    // this.service.email_change_pass = email;
    // this.service.get_code_to_change_pass(email).subscribe((x) => {
    //   if (x.success == true) {
    //     $('#forget_pass_send_email').modal('hide');
    //     $('#verify_email_to_change').modal('show');
    //   } else {
    //     $('#forget_pass_send_email').modal('hide');
    //     this.pop_service.open_error_book(x.error);
    //   }
    // });
  }

  forget_pass_second_step(verify_code: any) {
    // this.service.verify_code_to_change_pass(verify_code).subscribe((x) => {
    //   if (x.success == true) {
    //     $('#verify_email_to_change').modal('hide');
    //     $('#change_pass').modal('show');
    //     this.signature = x.signature;
    //     this.code = verify_code;
    //   } else {
    //     $('#verify_email_to_change').modal('hide');
    //     this.pop_service.open_error_book(x.error);
    //   }
    // });
  }

  forget_pass_final_step(new_pass: any) {
    if (new_pass.length < 8) {
      this.pop_service.open_error_book('New Password length  should be >= 8');
      return;
    }
    // this.service.change_pass(new_pass, this.signature, this.code).subscribe((x) => {
    //   if (x.success == true) {
    //     $('#change_pass').modal('hide');
    //   } else {
    //     $('#change_pass').modal('hide');
    //     this.pop_service.open_error_book(x.error);
    //   }
    // });
  }

  close_popup(){
    $('#forget_pass_send_email').modal('hide');
    $('#verify_email_to_change').modal('hide');
    $('#change_pass').modal('hide');
  }
}
