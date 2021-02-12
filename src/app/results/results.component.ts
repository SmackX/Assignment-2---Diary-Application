import {Component, OnInit} from '@angular/core';
import { items } from '../items';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent {
  items = items;
  index = ' ';
  value1 = 'My result';
  constructor(){}
}
