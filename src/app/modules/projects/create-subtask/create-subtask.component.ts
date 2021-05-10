import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SubtaskDtoRequest} from "../../../model/Subtask";
import {TaskDtoResponse} from "../../../model/Task";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";
import {SubtaskService} from "../../../service/subtask.service";
import {TaskService} from "../../../service/task.service";
import {ProjectResponseDto} from "../../../model/Project";
import {ProjectService} from "../../../service/project.service";

@Component({
  selector: 'app-create-subtask',
  templateUrl: './create-subtask.component.html',
  styleUrls: ['./create-subtask.component.css']
})
export class CreateSubtaskComponent implements OnInit {

  subtaskDtoRequest: SubtaskDtoRequest = new SubtaskDtoRequest();
  taskId: number;
  taskList: Observable<TaskDtoResponse[]>;
  projectList: Observable<ProjectResponseDto[]>;
  subtaskStatus = [
    'TO_DO',
    'IN_PROGRESS',
    'DONE'
  ];

  constructor(
    private subtaskService: SubtaskService,
    private projectService: ProjectService,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    // private modalReference: MatDialogRef<CreateSubtaskComponent>
  ) { }

  ngOnInit(){
    // this.projectList = this.projectService.getProjectList();
    this.taskId = this.route.snapshot.params["id"];
  }

  // save() {
  //   this.subtaskService.save(this.subtaskDtoRequest).subscribe(data => {
  //     this.modalReference.close();
  //     this.router.navigate([`/workPage/projects/tasks-list/${this.subtaskDtoRequest.taskId}`]);
  //   });
  // }

  saveProjectSubtask() {
    this.taskId = this.route.snapshot.params["id"];
    this.subtaskDtoRequest.projectTaskId = this.taskId;
    this.subtaskService.saveProjectSubtask(this.subtaskDtoRequest).subscribe(data => {
//       this.router.navigate(["/workPage/projects/subtasks-list", this.taskId]);
      this.router.navigate(["/workPage/projects/task-info", this.taskId]);
    });
    // this.subtaskService.saveProjectSubtask(this.subtaskDtoRequest).subscribe(data => {
    //   // this.modalReference.close();
    //   this.router.navigate([`/workPage/projects/subtasks-list/${this.subtaskDtoRequest.projectTaskId}`]);
    // });
  }

  navigateToSubtasksList(){
//     this.router.navigate(["workPage/projects/subtasks-list", this.taskId]);
    this.router.navigate(["workPage/projects/task-info", this.taskId]);
  }

  // close() {
  //   this.modalReference.close();
  // }

}
