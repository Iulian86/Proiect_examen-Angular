import { Component, Inject, OnInit } from '@angular/core';
import {TaskDtoResponse} from "../../../model/Task";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../../service/task.service";

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {

  task: TaskDtoResponse;

  constructor(private dialogReference: MatDialogRef<DeleteTaskComponent>,
                            private route: ActivatedRoute,
                            private router: Router,
                            private taskService: TaskService,
                            @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(){
      this.task = this.data;

      this.taskService.getProjectTaskById(this.task.id).
      subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }

  delete() {
      this.taskService.delete(this.task.id)
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
