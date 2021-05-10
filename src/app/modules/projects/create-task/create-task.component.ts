import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TaskDtoRequest} from "../../../model/Task";
import {SubtaskDtoResponse} from "../../../model/Subtask";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../../service/task.service";
import {SubtaskService} from "../../../service/subtask.service";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskDtoRequest: TaskDtoRequest = new TaskDtoRequest();
  subtasks: Observable<SubtaskDtoResponse[]>;
  selectedSubtasks: number[] = [];
  projectId: number;

  constructor(
    private taskService: TaskService,
    private subtaskService: SubtaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params["id"];
    // this.subtasks = this.subtaskService.getProjectSubtasksByName('', this.projectId);
  }

  saveProjectTask() {
    this.projectId = this.route.snapshot.params["id"];
    this.taskDtoRequest.projectId = this.projectId;
    this.taskService.saveProjectTask(this.taskDtoRequest).subscribe(data => {
      this.router.navigate(["/workPage/projects/tasks-list", this.projectId]);
    });
  }


  searchProjectSubtasksByName(event: any) {
    this.subtasks = this.subtaskService.getProjectSubtasksByName(event.target.value, this.projectId);
  }

  assignSubtask(subtaskId: number) {
    this.selectedSubtasks.push(subtaskId);
  }

  removeSubtask(subtaskId: number) {
    const index = this.selectedSubtasks.indexOf(subtaskId, 0);
    this.selectedSubtasks.splice(index, 1);
  }

  navigateToTasksList(){
    this.router.navigate(["workPage/projects/tasks-list", this.projectId]);
  }

}
