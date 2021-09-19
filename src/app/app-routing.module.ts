import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutmeComponent} from './components/pages/aboutme/aboutme.component';
import {HomeComponent} from './components/pages/home/home.component';
import {LoginComponent} from './components/pages/login/login.component';
import {NotfoundComponent} from './components/pages/notfound/notfound.component';
import {SignupComponent} from './components/pages/signup/signup.component';
import {ChatComponent} from './components/pages/chat/chat.component';
import {AccessGuard} from './guards/access.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./modules/aboutme/aboutme.module').then(m => m.AboutmeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: 'chat',
    canActivate: [AccessGuard],
    loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
