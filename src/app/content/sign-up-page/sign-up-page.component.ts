import { Component, OnInit } from '@angular/core';
import {FormControl,FormArray,FormGroup,Validators} from '@angular/forms'
import { ValidatorFn, AbstractControl } from '@angular/forms'
const validatePassword: ValidatorFn = (control: AbstractControl) : { [key : string]:  any } | null => {
  if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(control.value)){
    return null;
  }
  return {
    invalidPassword: (control.value) + ' is not a valid password, valid password need at lest 1 uppercase, 1 lowercase and 1 number',
  };
};
const validateEmail: ValidatorFn = (control: AbstractControl) : { [key : string]:  any } | null => {
  if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(control.value)){
    return null;
  }
  return {
    invalidPassword: (control.value) + ' is not a valid password, valid password need at lest 1 uppercase, 1 lowercase and 1 number',
  };
};
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  profile = new FormGroup({
    fullName: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,validateEmail]),
    password: new FormControl(null,[Validators.required,validatePassword]),
    repassword: new FormControl(null,[Validators.required]),

  })
  get fullName(){
    return this.profile.get("fullName");
  }
  get email(){
    return this.profile.get("email");
  }
  get password(){
    return this.profile.get("password");
  }
  get repassword(){
    return this.profile.get("repassword");
  }
  onSubmit(){
    if(this.profile.valid){
      if(this.profile.get("email").value == "minhkhang231199@gmail.com" && this.profile.get("password").value == "khangmeo"){
        location.href='/login-page'
        //add new account to database
      }
      else(
        alert("your infomation have conflic!")
      )
    }
    else{
      this.validateAllFields(this.profile);
    }
  }
  validateAllFields(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach((field: string) => {
      const control = form.get(field);
      if (control instanceof FormArray) {
        this.validateAllFields(control);
      }
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }
}
