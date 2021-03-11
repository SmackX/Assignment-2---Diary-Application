import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../../shared-service.service';

@Component({
  selector: 'app-child1-component',
  templateUrl: './child1-component.component.html',
  styleUrls: ['./child1-component.component.scss']
})
export class Child1ComponentComponent implements OnInit {

  ServiceV = '';
  ParentV = '';
  constructor(svc: SharedServiceService) {
    this.ServiceV = svc.ServiceValue;
  }
  ngOnInit(): void {
  }

}
