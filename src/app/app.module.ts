import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutmeComponent} from './components/pages/aboutme/aboutme.component';
import {NavbarComponent} from './components/structure/navbar/navbar.component';
import {SignupComponent} from './components/pages/signup/signup.component';
import {NotfoundComponent} from './components/pages/notfound/notfound.component';
import {HeaderComponent} from './components/structure/header/header.component';
import {environment} from '../environments/environment';

import {GithubService} from './services/github.service';
import {AuthService} from './services/auth.service';
import {NotificationService} from './services/notification.service';
import {ToastrModule} from 'ngx-toastr';
import {ChatComponent} from './components/pages/chat/chat.component';
import {ChatService} from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutmeComponent,
    NavbarComponent,
    SignupComponent,
    NotfoundComponent,
    HeaderComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true
    }),
    FormsModule,
  ],
  providers: [GithubService, AuthService, NotificationService, ChatService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
