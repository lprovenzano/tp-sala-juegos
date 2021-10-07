import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PreguntadosRoutingModule} from './preguntados-routing.module';
import {PreguntadosService} from '../../../services/preguntados.service';
import {PreguntadosComponent} from '../../../components/games/preguntados/preguntados.component';


@NgModule({
  declarations: [PreguntadosComponent],
  imports: [
    CommonModule,
    PreguntadosRoutingModule
  ],
  providers: [PreguntadosService]
})
export class PreguntadosModule {
}
