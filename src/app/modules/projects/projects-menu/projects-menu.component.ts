import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ProjectResponseDto} from "../../../model/Project";
import {ProjectService} from "../../../service/project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.css']
})
export class ProjectsMenuComponent implements OnInit {

  projects: Observable<ProjectResponseDto[]>

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.projects = this.projectService.getProjectList();
  }

  openProjectDetails(id: number) {
    this.router.navigate(["workPage/projects/project-info", id]);
  }

}
