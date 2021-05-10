import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialsModule } from "src/app/material/materials/materials.module";
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from '@angular/material/card';

import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectDetailedViewComponent} from "./project-detailed-view/project-detailed-view.component";
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectsMenuComponent } from './projects-menu/projects-menu.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailedViewComponent } from './task-detailed-view/task-detailed-view.component';
import { CreateSubtaskComponent } from './create-subtask/create-subtask.component';
import { SubtaskListComponent } from './subtask-list/subtask-list.component';
import { SubtaskDetailedViewComponent } from './subtask-detailed-view/subtask-detailed-view.component';
import { EditSubtaskComponent } from './edit-subtask/edit-subtask.component';
import { SubtaskManagerComponent } from './subtask-manager/subtask-manager.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SharedModule} from "../../shared/shared.module";
import { ProjectWorkPagesComponent } from './project-work-pages/project-work-pages.component';
import {ProjectDetailsComponent} from "./project-details/project-details.component";
import {ProjectWorkPagesModule} from "./project-work-pages/project-work-pages.module";
import {ProjectsComponent} from "./projects.component";
import {WorkPageModule} from "../../layouts/work-page/work-page.module";
import { EditProjectComponent } from './edit-project/edit-project.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { DeleteSubtaskComponent } from './delete-subtask/delete-subtask.component';


@NgModule({
  declarations: [
    ProjectsComponent,

    ProjectListComponent,
    ProjectDetailsComponent,
    CreateProjectComponent,
    EditProjectComponent,
    DeleteProjectComponent,

    TasksListComponent,
    TaskDetailedViewComponent,
    CreateTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,

    SubtaskListComponent,
    SubtaskDetailedViewComponent,
    CreateSubtaskComponent,
    EditSubtaskComponent,
    DeleteSubtaskComponent,
    SubtaskManagerComponent,

    ProjectsMenuComponent
  ],
  imports: [
    ProjectWorkPagesModule,
    CommonModule,
    RouterModule,
    MaterialsModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    DragDropModule,
    SharedModule,

  ],
  exports:[
    ProjectsComponent,
    ProjectListComponent,
    CreateProjectComponent,
    ProjectsMenuComponent,
    ProjectDetailsComponent,

    MaterialsModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule
    // ProjectWorkPagesModule,
  ]
})
export class ProjectsModule { }
