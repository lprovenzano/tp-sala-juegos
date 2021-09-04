import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visibilityState = true;

  ShowNavbar(visibility: boolean): void {
    this.visibilityState = visibility;
  }
}
