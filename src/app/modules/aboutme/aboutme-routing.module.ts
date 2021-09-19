import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../../components/pages/home/home.component';
import {AboutmeComponent} from '../../components/pages/aboutme/aboutme.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: AboutmeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutmeRoutingModule {
}
