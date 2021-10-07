import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreguntadosComponent} from '../../../components/games/preguntados/preguntados.component';

const routes: Routes = [{
  path: '',
  component: PreguntadosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreguntadosRoutingModule {
}
