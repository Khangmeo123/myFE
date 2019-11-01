import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // reset login status
  this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
  // profile = new FormGroup({
  //   email: new FormControl(null,[Validators.required,Validators.email]),
  //   password: new FormControl(null,[Validators.required,Validators.minLength(8)])
  // })
  // get email(){
  //   return this.profile.get("email");
  // }
  // get password(){
  //   return this.profile.get("password");
  // }
  // onSubmit(){
  //   if(this.profile.valid){
  //     if(this.profile.get("email").value == "minhkhang231199@gmail.com" && this.profile.get("password").value == "khangmeo"){
  //       location.href='/personal'
  //     }
  //     else(
  //       alert(" incorect of email or password")
  //     )
  //   }
  //   else{
  //     this.validateAllFields(this.profile);
  //   }
  // }
  // validateAllFields(form: FormGroup | FormArray) {
  //   Object.keys(form.controls).forEach((field: string) => {
  //     const control = form.get(field);
  //     if (control instanceof FormArray) {
  //       this.validateAllFields(control);
  //     }
  //     if (control instanceof FormControl) {
  //       control.markAsTouched({ onlySelf: true });
  //     } else if (control instanceof FormGroup) {
  //       this.validateAllFields(control);
  //     }
  //   });
  // }
}

