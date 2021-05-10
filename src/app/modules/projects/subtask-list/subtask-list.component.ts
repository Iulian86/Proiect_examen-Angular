import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Location} from '@angular/common';
import {TaskDtoResponse} from "../../../model/Task";
import {SubtaskDtoResponse} from "../../../model/Subtask";
import {TaskService} from "../../../service/task.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SubtaskService} from "../../../service/subtask.service";
import {EditSubtaskComponent} from "../edit-subtask/edit-subtask.component";
import {DeleteSubtaskComponent} from "../delete-subtask/delete-subtask.component";

@Component({
  selector: 'app-subtask-list',
  templateUrl: './subtask-list.component.html',
  styleUrls: ['./subtask-list.component.css']
})
export class SubtaskListComponent implements OnInit {

  subtask_logo: string = "assets/project-img/subtask1.jpg";

  subtasks: Observable<SubtaskDtoResponse[]>;
  taskId: number;
  taskName: string;
  projectId: number;
  subtask: SubtaskDtoResponse;
  task: TaskDtoResponse;

  constructor(
    private subtaskService: SubtaskService,
    private route: ActivatedRoute,
    private router: Router,
    private matDialog: MatDialog,
    private location: Location) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params["id"];
    this.taskId = this.route.snapshot.params["id"];
    this.subtasks = this.subtaskService.getProjectSubtasksByProjectTaskId(this.taskId);
  }

  navigateToTasksList() {
      this.location.back();
  }

  viewSubtaskDetails(id: number){
    this.router.navigate(["workPage/projects/subtask-info", id]);
  }

  edit(subtaskId: number) {
    this.subtaskService.getProjectSubtaskById(subtaskId).subscribe(data => {
      this.subtask = data;
      const matDialogConfig = new MatDialogConfig();
      matDialogConfig.data = this.subtask;
      const dialogRef = this.matDialog.open(EditSubtaskComponent, matDialogConfig);
      dialogRef.afterClosed().subscribe(() => {
        this.subtasks = this.subtaskService.getProjectSubtasksByProjectTaskId(this.taskId);
      });
    });
  }

  delete(subtaskId: number) {
      this.subtaskService.getProjectSubtaskById(subtaskId).subscribe(data => {
        this.subtask = data;
        const matDialogConfig = new MatDialogConfig();
        matDialogConfig.data = this.subtask;
        const dialogRef = this.matDialog.open(DeleteSubtaskComponent, matDialogConfig);
        dialogRef.afterClosed().subscribe(() => {
          this.subtasks = this.subtaskService.getProjectSubtasksByProjectTaskId(this.taskId);
        });
      });
    }

}
