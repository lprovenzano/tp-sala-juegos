import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() isVisible: any;

  elements = [
    {
      icon: 'bi bi-house',
      name: 'Inicio',
      showLoggedUser: true,
      path: '/'
    },
    {
      icon: 'bi bi-person-bounding-box',
      name: 'Quién soy',
      showLoggedUser: true,
      path: '/about-me'
    },
    {
      icon: 'bi bi-door-open',
      name: 'Iniciar sesión',
      showLoggedUser: false,
      path: '/auth/login'
    },
    {
      icon: 'bi bi-box-arrow-in-right',
      name: 'Registrarse',
      showLoggedUser: false,
      path: '/auth/signup'
    }
  ];

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {

  }

  getElements(showLoggedUser: boolean): any[] {
    return this.elements.filter(e => e.showLoggedUser === showLoggedUser);
  }

}
