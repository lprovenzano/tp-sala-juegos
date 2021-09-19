import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutmeComponent} from './components/pages/aboutme/aboutme.component';
import {NavbarComponent} from './components/structure/navbar/navbar.component';
import {NotfoundComponent} from './components/pages/notfound/notfound.component';
import {HeaderComponent} from './components/structure/header/header.component';
import {environment} from '../environments/environment';

import {GithubService} from './services/github.service';
import {AuthService} from './services/auth.service';
import {NotificationService} from './services/notification.service';
import {ToastrModule} from 'ngx-toastr';
import {ChatService} from './services/chat.service';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FooterComponent } from './components/structure/footer/footer.component';
import { GamecardComponent } from './components/games/gamecard/gamecard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutmeComponent,
    NavbarComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    GamecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true
    }),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [GithubService, AuthService, NotificationService, ChatService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
