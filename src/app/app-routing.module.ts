import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { LoanComponent } from './login/loan/loan.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  // {
  //   path:'',
  //   component:HomeComponent
  // },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'loan',
    component: LoanComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  // {
  //   path:'**',
  //   component:ErrorComponent
  // },
  {
    path:'lch',
    component:LifecyclehooksComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
