import { Component, Inject, OnInit } from '@angular/core';
import {ProjectResponseDto} from "../../../model/Project";
import {ProjectRequestDto} from "../../../model/Project";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

  project: ProjectResponseDto;

  constructor(private dialogReference: MatDialogRef<DeleteProjectComponent>,
                    private route: ActivatedRoute,
                    private router: Router,
                    private projectService: ProjectService,
                    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(){
      this.project = this.data;

          this.projectService.getProjectById(this.project.id).
          subscribe(data => {
            console.log(data);
          }, error => console.log(error));
  }


  delete() {
      this.projectService.delete(this.project.id)
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
