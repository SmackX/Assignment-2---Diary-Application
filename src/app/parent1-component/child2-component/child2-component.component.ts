import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../../shared-service.service';

@Component({
  selector: 'app-child2-component',
  templateUrl: './child2-component.component.html',
  styleUrls: ['./child2-component.component.scss']
})
export class Child2ComponentComponent implements OnInit {
  ServiceV = '';
  ChildV = '';
  constructor(svc: SharedServiceService) {
    this.ServiceV = svc.ServiceValue;
  }
  ngOnInit(): void {
  }

}
