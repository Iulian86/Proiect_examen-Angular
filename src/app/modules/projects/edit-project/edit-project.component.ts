import { Component,Inject, OnInit } from '@angular/core';
import {ProjectResponseDto} from "../../../model/Project";
import {ProjectRequestDto} from "../../../model/Project";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project: ProjectResponseDto;

  constructor(private dialogReference: MatDialogRef<EditProjectComponent>,
              private route: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService,
              @Inject(MAT_DIALOG_DATA) public data){ }

  ngOnInit() {
    this.project = this.data;

    this.projectService.getProjectById(this.project.id).
    subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }


  edit() {
      this.projectService.update(this.project.id, this.project)
        .subscribe(data => {
          console.log(data);
          this.gotoProjectList;
          this.dialogReference.close();
        },error => console.log(error));
  }

  close() {
    this.dialogReference.close();
  }

  gotoProjectList(){
    this.router.navigate(["workPage/projects/project-list"]);
  }

}
