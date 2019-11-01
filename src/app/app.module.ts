import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { PersonalComponent } from './content/personal/personal.component';
import { RegisterComponent } from './content/register/register.component';
import { UniverAdmistionComponent } from './content/univer-admistion/univer-admistion.component';

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { UniversityDetailComponent } from './content/university-detail/university-detail.component';
import { LoginPageComponent } from './content/login-page/login-page.component';
import { SignUpPageComponent } from './content/sign-up-page/sign-up-page.component'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ApiProjectService } from './service/api-project.service';
import { SidebarComponent } from './template/sidebar/sidebar.component'
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { HomeComponent } from './content/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalComponent,
    RegisterComponent,
    UniverAdmistionComponent,
    UniversityDetailComponent,
    LoginPageComponent,
    SignUpPageComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [ApiProjectService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
