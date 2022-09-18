import { HigherorlowerComponent } from './components/games/higherorlower/higherorlower.component';
import { HangedComponent } from './components/games/hanged/hanged.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/structure/navbar/navbar.component';
import {NotfoundComponent} from './components/pages/notfound/notfound.component';
import {HeaderComponent} from './components/structure/header/header.component';
import {environment} from '../environments/environment';

import {AuthService} from './services/auth.service';
import {NotificationService} from './services/notification.service';
import {ToastrModule} from 'ngx-toastr';

import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import {FooterComponent} from './components/structure/footer/footer.component';
import { PreguntadosComponent } from './components/games/preguntados/preguntados.component';
import { TwentyoneComponent } from './components/games/twentyone/twentyone.component';
import {ScoreService} from './services/score.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    HangedComponent,
    TwentyoneComponent
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
  providers: [AuthService, NotificationService, ScoreService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
