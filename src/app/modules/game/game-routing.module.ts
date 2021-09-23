import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HangedComponent} from '../../components/games/hanged/hanged.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hanged',
        component: HangedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
