import { Component, OnInit } from '@angular/core';
import {ProjectResponseDto} from "../../../model/Project";
import {UserDtoResponse} from "../../../model/User";
import {ProjectService} from "../../../service/project.service";
import {SignupService} from "../../../service/signup.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  user_logo: string = "assets/project-img/user.png";

  project= new ProjectResponseDto();
  projectId: number;
  user: UserDtoResponse;

  constructor(
    private projectService:ProjectService,
    private userService: SignupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.projectId = this.route.snapshot.params["id"];
    this.getProject();
  }

  findUserByEmail(event: any) {
    this.userService.findEmail(event.target.value).subscribe(data => {
      this.user = data;
    });
  }

  inviteUser(username: string) {
    console.log("called with ", username);
    this.projectService.assignUserToProject(this.project.name, username).subscribe(
      data=>{
        this.getProject();
      });
  }

  getProject(){
    this.projectService.getProjectById(this.projectId).subscribe(data => {
      this.project = data;
      console.log(this.project);
    });
  }


}
