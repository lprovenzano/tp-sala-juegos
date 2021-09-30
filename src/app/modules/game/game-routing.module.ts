import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccessGuard} from '../../guards/access.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hanged',
        canActivate: [AccessGuard],
        loadChildren: () => import('./hanged/hanged.module').then(m => m.HangedModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {
}
