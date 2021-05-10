import { Component, OnInit } from '@angular/core';
import {SingInService} from "../../../service/sing-in.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-workpage-header',
  templateUrl: './workpage-header.component.html',
  styleUrls: ['./workpage-header.component.css']
})
export class WorkpageHeaderComponent implements OnInit {

  logo: string = "assets/logo-img/logo0.6.png";
  // logoTitle: string = "assets/logo-img/logo_title3.png";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  signOut(){
    sessionStorage.removeItem(SingInService.BASIC_AUTH_FLAG_B64);
    sessionStorage.removeItem(SingInService.AUTHENTICATED_USER);
    this.route.navigate(["/"])
  }

}
