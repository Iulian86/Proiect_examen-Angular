import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction-page-header',
  templateUrl: './introduction-page-header.component.html',
  styleUrls: ['./introduction-page-header.component.css']
})
export class IntroductionPageHeaderComponent implements OnInit {

  logo: string = "assets/logo-img/logo0.6.png";
  // logoTitle: string = "assets/logo-img/logo_title3.png";

  constructor() { }

  ngOnInit(): void {
  }

}
