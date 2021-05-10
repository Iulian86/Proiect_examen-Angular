import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TaskDtoResponse} from "../../../model/Task";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TaskService} from "../../../service/task.service";
import {EditTaskComponent} from "../edit-task/edit-task.component";
import {DeleteTaskComponent} from "../delete-task/delete-task.component";


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  task_logo: string = "assets/project-img/task.png";

  tasks: Observable<TaskDtoResponse[]>;
  task: TaskDtoResponse;
  projectId: number;


  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params["id"];
    this.tasks = this.taskService.getProjectTasksByProjectId(this.projectId);
  }

  viewTaskDetails(id: number){
    this.router.navigate(["workPage/projects/task-info", id]);
  }

  navigateToProjectsList() {
    this.router.navigate(["workPage/projects/project-list"]);
  }

  viewProjectSubtasks(id: number){
    this.router.navigate(["workPage/projects/subtasks-list", id]);
  }

  manageSubtasks(id: number){
    this.router.navigate(["workPage/projects/manage-subtasks", id]);
  }

  edit(id: number) {
    this.taskService.getProjectTaskById(id).subscribe(data => {
      this.task = data;
      const matDialogConfig = new MatDialogConfig();
      matDialogConfig.data = this.task;
      const dialogRef = this.matDialog.open(EditTaskComponent, matDialogConfig);
      dialogRef.afterClosed().subscribe(() => {
        this.tasks = this.taskService.getProjectTasksByProjectId(this.projectId);
      });
    });
  }

  delete(id: number) {
    this.taskService.getProjectTaskById(id).subscribe(data => {
      this.task = data;
      const matDialogConfig = new MatDialogConfig();
      matDialogConfig.data = this.task;
      const dialogRef = this.matDialog.open(DeleteTaskComponent, matDialogConfig);
      dialogRef.afterClosed().subscribe(() => {
        this.tasks = this.taskService.getProjectTasksByProjectId(this.projectId);
      });
    });
  }

//   delete(id: number) {
//     this.taskService.delete(id).subscribe(data => {
//       console.log(data);
//       this.tasks = this.taskService.getProjectTasksByProjectId(this.projectId);
//     }, error=> console.log(error));
//   }

}
