import { Component, OnInit } from '@angular/core';
import { items } from '../items';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {
  items = items;

  DataTime: string = ' ';
  Distance: string = ' ';
  time: string = ' ';


  title = 'Add record';
  text1 = 'Jagging date';
  text2 = 'Distance (m)';
  text3 = 'Time (s)';
  constructor() { }

  ngOnInit(): void {}

  Push(): void{
    this.items.push({
      dateTime: this.DataTime, distanse: this.Distance, time: this.time});
  }
}
