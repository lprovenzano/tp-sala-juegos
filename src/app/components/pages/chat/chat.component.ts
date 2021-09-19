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
  colorMe = '';
  colorOther = '';

  private colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning text-dark', 'bg-info text-dark', 'bg-dark'];

  constructor(public chatService: ChatService, public authService: AuthService) {
    this.chatService.getMessages()
      .subscribe(() => {
        setTimeout(() => {
          this.element.scrollTop = this.element.scrollHeight;
        }, 20);
      });
  }

  ngOnInit(): void {
    this.element = document.getElementById('messages');
    this.colorMe = this.getRandomColor();
    const color = this.getRandomColor();
    this.colorOther = this.colorMe === color ? this.getRandomColor() : color;
  }

  sendMessage(): void {
    if (this.message.trim().length === 0) {
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

  getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
