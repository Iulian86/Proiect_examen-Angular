import {Component, Inject, OnInit} from '@angular/core';
import {SubtaskDtoResponse} from "../../../model/Subtask";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SubtaskService} from "../../../service/subtask.service";

@Component({
  selector: 'app-edit-subtask',
  templateUrl: './edit-subtask.component.html',
  styleUrls: ['./edit-subtask.component.css']
})
export class EditSubtaskComponent implements OnInit {

  subtask: SubtaskDtoResponse;
  subtaskStatus = [
    'TO_DO',
    'IN_PROGRESS',
    'DONE'
  ];

  constructor(private dialogReference: MatDialogRef<EditSubtaskComponent>,
                  private router: Router,
                  private subtaskService: SubtaskService,
                  @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(){
    this.subtask = this.data;
  }

//   editStatus() {
//     this.subtaskService.updateProjectSubtaskStatus(this.subtask.id, this.subtask.status)
//       .subscribe(data => {
//       console.log(data);
//         this.dialogReference.close();
//       });
//   }

  editSubtask(){
  this.subtaskService.update(this.subtask.id, this.subtask)
          .subscribe(data => {
            console.log(data);
            this.dialogReference.close();
          },error => console.log(error));
  }

  close() {
    this.dialogReference.close();
  }

}
