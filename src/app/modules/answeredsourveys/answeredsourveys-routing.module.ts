import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnsweredsurveysComponent} from '../../components/answeredsurveys/answeredsurveys.component';

const routes: Routes = [{
  path: '',
  children: [
    {path: '', component: AnsweredsurveysComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnsweredsourveysRoutingModule {
}
