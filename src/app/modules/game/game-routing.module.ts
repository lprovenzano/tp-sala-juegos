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
      },
      {
        path: 'higherorlower',
        canActivate: [AccessGuard],
        loadChildren: () => import('./higherorlower/higherorlower.module').then(m => m.HigherorlowerModule)
      }, {
        path: 'preguntados',
        canActivate: [AccessGuard],
        loadChildren: () => import('./preguntados/preguntados.module').then(m => m.PreguntadosModule)
      },
      {
        path: 'twentyone',
        canActivate: [AccessGuard],
        loadChildren: () => import('./twentyone/twentyone.module').then(m => m.TwentyoneModule)
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
