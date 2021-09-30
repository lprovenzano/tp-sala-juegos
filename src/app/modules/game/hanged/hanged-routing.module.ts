import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from '../../../components/pages/notfound/notfound.component';
import {HangedComponent} from '../../../components/games/hanged/hanged.component';

const routes: Routes = [
  {
    path: '',
    component: HangedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HangedRoutingModule {
}
