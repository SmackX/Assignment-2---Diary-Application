import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../../shared-service.service';

@Component({
  selector: 'app-child3-component',
  templateUrl: './child3-component.component.html',
  styleUrls: ['./child3-component.component.scss']
})
export class Child3ComponentComponent implements OnInit {

  ServiceV = '';
  ChildV = '';
  constructor(svc: SharedServiceService) {
    this.ServiceV = svc.ServiceValue;
  }
  ngOnInit(): void {
  }

}
