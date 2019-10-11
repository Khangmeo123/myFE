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
import { UniversityDetailComponent } from './content/university-detail/university-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalComponent,
    RegisterComponent,
    UniverAdmistionComponent,
    UniversityDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
