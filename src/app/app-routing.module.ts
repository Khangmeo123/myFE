import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './content/personal/personal.component';
import { RegisterComponent } from './content/register/register.component';
import { UniverAdmistionComponent } from './content/univer-admistion/univer-admistion.component';
import { UniversityDetailComponent } from './content/university-detail/university-detail.component';
import { LoginPageComponent } from './content/login-page/login-page.component';
import { SignUpPageComponent } from './content/sign-up-page/sign-up-page.component';

import { AuthGuard } from './_guards';
import { BenchmarkComponent } from './content/benchmark/benchmark.component';
import { MajorComponent } from './content/major/major.component';
const routes: Routes = [
  {path: 'personal', component: PersonalComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'univer-admistion', component:UniverAdmistionComponent},
  { path: 'university-detail',component: UniversityDetailComponent },
  {path: 'login-page',component:LoginPageComponent},
  {path: 'sign-up-page',component:SignUpPageComponent},
  {path: 'register',component:RegisterComponent},
  { path: 'benchmark',component:BenchmarkComponent },
  { path: 'majors',component:MajorComponent },
//   {
//     path: '',
//     component: PersonalComponent,
//     canActivate: [AuthGuard]
// },
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
