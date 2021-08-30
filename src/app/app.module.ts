import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutmeComponent } from './components/pages/aboutme/aboutme.component';
import { NavbarComponent } from './components/structure/navbar/navbar.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutmeComponent,
    NavbarComponent,
    SigninComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
