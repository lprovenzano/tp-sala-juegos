import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatRoutingModule} from './chat-routing.module';
import {ChatComponent} from '../../components/pages/chat/chat.component';
import {FormsModule} from '@angular/forms';

import {ChatService} from '../../services/chat.service';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ],
  providers: [ChatService]
})
export class ChatModule {
}
