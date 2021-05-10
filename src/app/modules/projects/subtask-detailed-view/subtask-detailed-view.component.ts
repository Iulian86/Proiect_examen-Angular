import { Component, OnInit } from '@angular/core';
import {TaskDtoResponse} from "../../../model/Task";
import {UserDtoResponse} from "../../../model/User";
import {SubtaskDtoResponse} from "../../../model/Subtask";
import {TaskService} from "../../../service/task.service";
import {SignupService} from "../../../service/signup.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';
import {SubtaskService} from "../../../service/subtask.service";

@Component({
  selector: 'app-subtask-detailed-view',
  templateUrl: './subtask-detailed-view.component.html',
  styleUrls: ['./subtask-detailed-view.component.css']
})
export class SubtaskDetailedViewComponent implements OnInit {

  user_logo: string = "assets/project-img/user.png";

  subtask= new SubtaskDtoResponse();
  subtaskId: number;
  taskId: number;
  user: UserDtoResponse;

  constructor(
    private subtaskService:SubtaskService,
    private userService: SignupService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.subtaskId = this.route.snapshot.params["id"];
    this.taskId = this.route.snapshot.params["id"];
    this.getSubtask();
  }

  findUserByEmail(event: any) {
    this.userService.findEmail(event.target.value).subscribe(data => {
      this.user = data;
    });
  }

  inviteUser(username: string) {
    console.log("called with ", username);
    this.subtaskService.assignUserToSubtask(this.subtask.name, username).subscribe(
      data=>{
        this.getSubtask();
      });
  }

  getSubtask(){
    this.subtaskService.getProjectSubtaskById(this.subtaskId).subscribe(data => {
      this.subtask = data;
      console.log(this.subtask);
    });
  }

  navigateToSubtasksList() {
        this.location.back();
      }

}
