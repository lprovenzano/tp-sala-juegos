import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../../components/pages/login/login.component';
import {SignupComponent} from '../../components/pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: '**', redirectTo: 'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
