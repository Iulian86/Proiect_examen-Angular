import { Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProjectResponseDto} from "../../../model/Project";
import {ProjectService} from "../../../service/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditProjectComponent} from "../edit-project/edit-project.component";
import {DeleteProjectComponent} from "../delete-project/delete-project.component";


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  project_logo: string = "assets/project-img/project.jpg";

  projects: Observable<ProjectResponseDto[]>
  project: ProjectResponseDto;
  projectId: number;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router,
              private matDialog: MatDialog) {}

  ngOnInit(){
    this.projectId = this.route.snapshot.params["id"];
    this.projects = this.projectService.getProjectList();
  }

//   TODO: develop Open Project
//   openProject(id: number) {
//     this.router.navigate(["workPage/projects/project-work-pages/project-details", id]);
//   }

  viewProjectDetails(id: number) {
      this.router.navigate(["workPage/projects/project-work-pages/project-details", id]);
    }

  viewProjectTasks(id: number){
      this.router.navigate(["workPage/projects/tasks-list", id]);
    }



  editProject(id: number) {
    this.projectService.getProjectById(id).subscribe(data => {
      this.project = data;
      const matDialogConfig = new MatDialogConfig();
      matDialogConfig.data = this.project;
      const dialogRef = this.matDialog.open(EditProjectComponent, matDialogConfig);
      dialogRef.afterClosed().subscribe(() => {
        this.projects = this.projectService.getProjectList();
      });
    });
  }

  deleteProject(id: number) {
      this.projectService.getProjectById(id).subscribe(data => {
        this.project = data;
        const matDialogConfig = new MatDialogConfig();
        matDialogConfig.data = this.project;
        const dialogRef = this.matDialog.open(DeleteProjectComponent, matDialogConfig);
        dialogRef.afterClosed().subscribe(() => {
          this.projects = this.projectService.getProjectList();
        });
      });
    }

}
