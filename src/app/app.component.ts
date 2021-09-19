import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visibilityState = true;
  footerText = 'Laboratorio IV - UTN.';
  navbarElements = [
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

  ShowNavbar(visibility: boolean): void {
    this.visibilityState = visibility;
  }

  onResize(size: any): void {
    const widthThresholdToDisable = 991.98;
    this.visibilityState = size.target.innerWidth > widthThresholdToDisable;
  }

}
