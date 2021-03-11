import {Component, OnInit, Output} from '@angular/core';
import {SharedServiceService} from '../shared-service.service';
import * as EventEmitter from 'events';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-parent1-component',
  templateUrl: './parent1-component.component.html',
  styleUrls: ['./parent1-component.component.scss'],
  providers: [LoggingService]
})
export class Parent1ComponentComponent implements OnInit {
  ServiceV = '';
  ParentV = '';
  constructor(svc: SharedServiceService, private logging: LoggingService ) {
    this.ServiceV = svc.ServiceValue;
  }

  @Output() PushFromParent = new EventEmitter<{ parentV: string }>();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // tslint:disable-next-line:typedef
   Push( ParentV: string) {
      this.PushFromParent.emit({
        parentV: ParentV
      });
      this.logging.logStatus(ParentV);
    }
}
