import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutmeComponent} from './components/pages/aboutme/aboutme.component';
import {NavbarComponent} from './components/structure/navbar/navbar.component';
import {SigninComponent} from './components/pages/signin/signin.component';
import {NotfoundComponent} from './components/pages/notfound/notfound.component';
import {GithubService} from './services/github.service';
import {HeaderComponent} from './components/structure/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutmeComponent,
    NavbarComponent,
    SigninComponent,
    NotfoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
