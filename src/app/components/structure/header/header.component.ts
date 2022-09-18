import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import firebase from 'firebase';
import {NotificationService} from '../../../services/notification.service';
import {Router} from '@angular/router';
import {ScoreService} from '../../../services/score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisible = true;
  accumulatedPoints = 0;
  user: any | null | undefined;

  @Output() visibility = new EventEmitter<boolean>();

  constructor(public authService: AuthService, private notificationService: NotificationService, private routerService: Router, private scoreService: ScoreService) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.user = JSON.parse(localStorage.getItem('user') as string);
      this.scoreService.getAllScores()
      setTimeout(() => {
        this.accumulatedPoints = this.scoreService.getScoreByUserId()
      }, 3000);
    }
  }

  ShowNavbar(visibility: boolean): void {
    this.visibility.emit(visibility);
  }

  logout(): void {
    if (this.authService.isLoggedIn() && this.authService.logout()) {
      this.notificationService.showSuccess('Sesión cerrada con éxito.', 'Ok');
      setTimeout(() => {
        this.routerService.navigate(['/']).then(() => {
          window.location.reload();
        });
      }, 3000);
    }
  }


}
