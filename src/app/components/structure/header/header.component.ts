import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isVisible = true;

  @Output() visibility = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {

  }

  ShowNavbar(visibility: boolean): void {
    this.visibility.emit(visibility);
  }

}
