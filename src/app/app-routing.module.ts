import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './content/personal/personal.component';
import { RegisterComponent } from './content/register/register.component';
import { UniverAdmistionComponent } from './content/univer-admistion/univer-admistion.component';
import { UniversityDetailComponent } from './content/university-detail/university-detail.component';


const routes: Routes = [
  {path: 'personal', component: PersonalComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'univer-admistion', component:UniverAdmistionComponent},
  { path: 'university-detail',component: UniversityDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
