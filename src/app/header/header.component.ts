import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  LogoURL = 'https://angular.io/assets/images/logos/angular/angular.png';
  ngOnInit(): void {
  }

}
