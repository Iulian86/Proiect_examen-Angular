import { Component, OnInit } from '@angular/core';
import {SubtaskDtoResponse} from "../../../model/Subtask";
import {SubtaskService} from "../../../service/subtask.service";
import {ActivatedRoute} from "@angular/router";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Location} from '@angular/common';

@Component({
  selector: 'app-subtask-manager',
  templateUrl: './subtask-manager.component.html',
  styleUrls: ['./subtask-manager.component.css']
})
export class SubtaskManagerComponent implements OnInit {

  todo_logo: string = "assets/project-img/subtask-todo.png";
  in_progress_logo: string = "assets/project-img/subtask-in-progress.png";
  done_logo: string = "assets/project-img/subtask-done.png";

  todoDto: SubtaskDtoResponse[] = [];
  inProgressDto: SubtaskDtoResponse[] = [];
  doneDto: SubtaskDtoResponse[] = [];

  constructor(
    private subtasksService: SubtaskService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(){
    const taskId: number = this.route.snapshot.params["id"];
    this.subtasksService.getProjectSubtasksByProjectTaskId(taskId).subscribe((data: SubtaskDtoResponse[]) => {
      data.forEach(el => {
        if (el.status === 'DONE') {
          this.doneDto.push(el);
        } else if (el.status === 'TO_DO') {
          this.todoDto.push(el);
        } else {
          this.inProgressDto.push(el);
        }
      });
    });
  }

  navigateToSubtasksList() {
    this.location.back();
  }

  drop(event: CdkDragDrop<SubtaskDtoResponse[]>) {
    console.log('DRAG AND DROP EVENT === ', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const currentSubtask: SubtaskDtoResponse = event.previousContainer.data[event.previousIndex];
      const updatedSubtask: SubtaskDtoResponse =
        this.changeStatus(event.previousContainer.data[event.previousIndex], event.container.id);
      this.subtasksService.updateProjectSubtaskStatus(currentSubtask.id, updatedSubtask.status).subscribe( data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(event.container.data[event.currentIndex]);
  }

  changeStatus(subtask: SubtaskDtoResponse, newStatus: string): SubtaskDtoResponse {
    // @ts-ignore
    switch (newStatus) {
      case('in_progress_container') : {
        subtask.status = 'IN_PROGRESS';
        break;
      }
      case('todo_container') : {
        subtask.status = 'TO_DO';
        break;
      }
      case('done_container') : {
        subtask.status = 'DONE';
        break;
      }
      default: {
        console.log('error');
      }
    }
    return subtask;
  }

}
