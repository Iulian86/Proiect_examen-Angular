import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../service/project.service";
import {SignupService} from "../../../service/signup.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../../service/task.service";
import {ProjectResponseDto} from "../../../model/Project";
import {UserDtoResponse} from "../../../model/User";
import {TaskDtoResponse} from "../../../model/Task";

@Component({
  selector: 'app-task-detailed-view',
  templateUrl: './task-detailed-view.component.html',
  styleUrls: ['./task-detailed-view.component.css']
})
export class TaskDetailedViewComponent implements OnInit {

  task= new TaskDtoResponse();
  taskId: number;
  user: UserDtoResponse;

  constructor(
    private taskService:TaskService,
    private userService: SignupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.taskId = this.route.snapshot.params["id"];
    this.getTask();
  }

  getTask(){
    this.taskService.getProjectTaskById(this.taskId).subscribe(data => {
      this.task = data;
      console.log(this.task);
    });
  }


}
