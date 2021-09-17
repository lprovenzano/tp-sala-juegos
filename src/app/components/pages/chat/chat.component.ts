import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../../services/chat.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  message = '';
  element: any;

  constructor(public chatService: ChatService, public authService: AuthService) {
    this.chatService.getMessages()
      .subscribe(() => {
        setTimeout(() => {
          this.element.scrollTop = this.element.scrollHeight;
        }, 20);

      });
  }

  ngOnInit(): void {
    this.element = document.getElementById('app-mensajes');
  }

  sendMessage(): void {
    console.log(this.message);
    if (this.message.length === 0) {
      return;
    }
    this.chatService.sendMessage(this.message)
      .then(() => this.cleanInput())
      .catch((err: any) => {
        console.error('Error al enviar', err);
      });
  }

  cleanInput(): void {
    this.message = '';
  }
}
