import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutmeRoutingModule} from './aboutme-routing.module';
import {GithubService} from '../../services/github.service';
import {AboutmeComponent} from '../../components/pages/aboutme/aboutme.component';


@NgModule({
  declarations: [AboutmeComponent],
  imports: [
    CommonModule,
    AboutmeRoutingModule
  ],
  providers: [GithubService]
})
export class AboutmeModule {
}
