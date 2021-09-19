import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visibilityState = true;
  footerText = 'Laboratorio IV - UTN.';

  ShowNavbar(visibility: boolean): void {
    this.visibilityState = visibility;
  }

  onResize(size: any): void {
    const widthThresholdToDisable = 991.98;
    this.visibilityState = size.target.innerWidth > widthThresholdToDisable;
  }

}
