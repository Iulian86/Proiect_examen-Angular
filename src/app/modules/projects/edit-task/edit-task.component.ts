import { Component,Inject, OnInit } from '@angular/core';
import {TaskDtoResponse} from "../../../model/Task";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../../service/task.service";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task: TaskDtoResponse;

  constructor(private dialogReference: MatDialogRef<EditTaskComponent>,
              private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
      this.task = this.data;

      this.taskService.getProjectTaskById(this.task.id).
      subscribe(data => {
        console.log(data);
      }, error => console.log(error));
  }

    edit() {
        this.taskService.update(this.task.id, this.task)
          .subscribe(data => {
            console.log(data);
            this.dialogReference.close();
          },error => console.log(error));
    }

    close() {
      this.dialogReference.close();
    }

}
