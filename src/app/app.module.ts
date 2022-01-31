import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { LoanComponent } from './login/loan/loan.component';
import { RedirectiveComponent } from './redirective/redirective.component';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { AshaComponent } from './asha/asha.component';
import { AnupComponent } from './anup/anup.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SquarePipe } from './square.pipe';
import { CubePipe } from './cube.pipe';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { BulbComponent } from './bulb/bulb.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoanComponent,
    RedirectiveComponent,
    S1Component,
    S2Component,
    AshaComponent,
    AnupComponent,
    PipedemoComponent,
    SquarePipe,
    CubePipe,
    LifecyclehooksComponent,
    ReactiveformComponent,
    TemplateformComponent,
    BulbComponent,
    CartComponent
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
