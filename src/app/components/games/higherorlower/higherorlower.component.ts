import {Component, OnInit} from '@angular/core';
import {HigherorlowerService} from '../../../services/higherorlower.service';

@Component({
  selector: 'app-higherorlower',
  templateUrl: './higherorlower.component.html',
  styleUrls: ['./higherorlower.component.scss']
})
export class HigherorlowerComponent implements OnInit {

  constructor(private higherOrLowerService: HigherorlowerService) {
  }

  ngOnInit(): void {
  }

}
