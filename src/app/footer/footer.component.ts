import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  FooterLogo = 'https://pngimg.com/uploads/copyright/copyright_PNG59.png'
  ngOnInit(): void {
  }

}
