import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-parent2-component',
  templateUrl: './parent2-component.component.html',
  styleUrls: ['./parent2-component.component.scss']
})
export class Parent2ComponentComponent implements OnInit {
  ServiceV = '';
  ParentV = '';
  constructor(svc: SharedServiceService) {
    this.ServiceV = svc.ServiceValue;
  }

  ngOnInit(): void {
  }

}
