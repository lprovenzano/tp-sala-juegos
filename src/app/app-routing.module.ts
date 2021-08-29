import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './components/pages/aboutme/aboutme.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutmeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
