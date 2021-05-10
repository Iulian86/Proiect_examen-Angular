import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProjectResponseDto} from "../../../model/Project";
import {ProjectService} from "../../../service/project.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-project-page-header',
  templateUrl: './project-page-header.component.html',
  styleUrls: ['./project-page-header.component.css']
})
export class ProjectPageHeaderComponent implements OnInit {

  projects: Observable<ProjectResponseDto[]>;
  project= new ProjectResponseDto();
  projectId: number;
  private sub: any;

  constructor(private projectService: ProjectService, private router: Router, private route: ActivatedRoute) {
    // const id: string = route.snapshot.params.id;
    // const url: string = route.snapshot.url.join('');
    // const user = route.snapshot.data.user;
  }

  ngOnInit(){
    // this.projects = this.projectService.getProjectList();
    // this.projectId = this.route.snapshot.params["id"];
    // this.projectId = +this.route.snapshot.params['id'];
    // this.sub = this.route.params.subscribe(params=>{
    //   this.projectId = +params["id"];
    // })
    // this.route.paramMap.subscribe(params=>{
    //   this.projectId = +params.get('id');
    //   this.projects = this.projectService.getProjectList();
    // })

  }

  openProjectDetails() {
    this.route.paramMap.subscribe(params=>{
      this.project.id = +params.get('id');
    })
    this.getProject();
    this.router.navigate(["workPage/projects/project-work-pages/project-details", this.project.id]);
  }

  getProject(){
    this.projectService.getProjectById(this.projectId).subscribe(data => {
      this.project = data;
      console.log(this.project);
    });
  }

}
