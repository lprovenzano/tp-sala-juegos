import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Inavbar} from '../../../interfaces/inavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  isVisible: any;

  @Input()
  elements: Inavbar[] | undefined;

  status = false;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {

  }

  getElements(showLoggedUser: boolean): Inavbar[] {
    // @ts-ignore
    return this.elements.filter(e => e.showLoggedUser === showLoggedUser);
  }
}
