import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from './components/pages/notfound/notfound.component';
import {AccessGuard} from './guards/access.guard';
import {AdminGuard} from './guards/admin.guard';

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
    path: 'games',
    canActivate: [AccessGuard],
    loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule)
  },
  {
    path: 'survey',
    canActivate: [AccessGuard],
    loadChildren: () => import('./modules/survey/survey.module').then(m => m.SurveyModule)
  },
  {
    path: 'answered-surveys',
    canActivate: [AdminGuard],
    loadChildren: () => import('./modules/answeredsourveys/answeredsourveys.module').then(m => m.AnsweredsourveysModule)
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
