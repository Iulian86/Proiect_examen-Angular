import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { from } from 'rxjs';

import { IntroductionPageComponent } from './layouts/introduction-page/introduction-page.component';
import { WorkPageComponent } from './layouts/work-page/work-page.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { SignupComponent } from './modules/signup/signup.component';
import { SigninComponent } from './modules/signin/signin.component';
import {ProjectListComponent} from "./modules/projects/project-list/project-list.component";
import {EditProjectComponent} from "./modules/projects/edit-project/edit-project.component";
import {ProjectDetailedViewComponent} from "./modules/projects/project-detailed-view/project-detailed-view.component";
import {CreateProjectComponent} from "./modules/projects/create-project/create-project.component";
import {CreateTaskComponent} from "./modules/projects/create-task/create-task.component";
import {TasksListComponent} from "./modules/projects/tasks-list/tasks-list.component";
import {TaskDetailedViewComponent} from "./modules/projects/task-detailed-view/task-detailed-view.component";
import {CreateSubtaskComponent} from "./modules/projects/create-subtask/create-subtask.component";
import {SubtaskListComponent} from "./modules/projects/subtask-list/subtask-list.component";
import {SubtaskDetailedViewComponent} from "./modules/projects/subtask-detailed-view/subtask-detailed-view.component";
import {SubtaskManagerComponent} from "./modules/projects/subtask-manager/subtask-manager.component";
import {ProjectWorkPagesComponent} from "./modules/projects/project-work-pages/project-work-pages.component";
import {ProjectDetailsComponent} from "./modules/projects/project-details/project-details.component";
import {ProjectTasksComponent} from "./modules/projects/project-work-pages/project-tasks/project-tasks.component";
import {RaidLogComponent} from "./modules/projects/project-work-pages/raid-log/raid-log.component";
// import * as path from "path";

const routes: Routes = [
  {
    path:'',
    component: IntroductionPageComponent,
    children: [
      {path: '', redirectTo:'home', pathMatch:"full"},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent}
    ]
  },
  {
    path:'workPage',
    component:WorkPageComponent,
    children: [
      {path: '', redirectTo:'projects', pathMatch:"full"},
      {path: 'projects',component: ProjectsComponent,
        children:[
          {path: '', redirectTo:'project-list', pathMatch:"full"},
          {path: 'project-list',component: ProjectListComponent},
          {path: 'project-create',component: CreateProjectComponent},
          {path: 'project-info/:id',component: ProjectDetailedViewComponent},
          {path: 'update-project/:id',component: EditProjectComponent},
          // {path: 'project-details/:id', component: ProjectDetailsComponent},
          {path: 'tasks-list/:id',component: TasksListComponent},
          {path: 'project-tasks', component: ProjectTasksComponent},
          {path: 'subtasks-list/:id',component: SubtaskListComponent},
          {path: 'manage-subtasks/:id',component: SubtaskManagerComponent},
          {path: 'task-info/:id',component: TaskDetailedViewComponent},
          {path: 'subtask-info/:id',component: SubtaskDetailedViewComponent},
          {path: 'create-tasks/:id',component: CreateTaskComponent},
          {path: 'create-subtasks/:id',component: CreateSubtaskComponent},

          {path: 'project-work-pages',component: ProjectWorkPagesComponent,
            children:[
              // {path: '', redirectTo:'project-details/:id', pathMatch:"full"},
              {path: 'project-details/:id', component: ProjectDetailsComponent},
              {path: 'project-tasks', component: ProjectTasksComponent},
              {path: 'raid-log', component: RaidLogComponent},
              //TODO: to add bill-of-quantities and site-reports, and others to come
            ]},
        ]},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
