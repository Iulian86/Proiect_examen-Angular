import { Component, Inject, OnInit } from '@angular/core';
import {SubtaskDtoResponse} from "../../../model/Subtask";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SubtaskService} from "../../../service/subtask.service";

@Component({
  selector: 'app-delete-subtask',
  templateUrl: './delete-subtask.component.html',
  styleUrls: ['./delete-subtask.component.css']
})
export class DeleteSubtaskComponent implements OnInit {

  subtask: SubtaskDtoResponse;

  constructor(private dialogReference: MatDialogRef<DeleteSubtaskComponent>,
                  private router: Router,
                  private subtaskService: SubtaskService,
                  @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
      this.subtask = this.data;

      this.subtaskService.getProjectSubtaskById(this.subtask.id).
      subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }

  delete() {
      this.subtaskService.delete(this.subtask.id)
        .subscribe(data => {
          console.log(data);
//           this.gotoProjectList;
          this.dialogReference.close();
        },error => console.log(error));
  }

  close() {
    this.dialogReference.close();
  }

//   gotoProjectList(){
//     this.router.navigate(["workPage/projects/project-list"]);
//   }

}
