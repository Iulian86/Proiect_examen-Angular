import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ProjectDetailsComponent } from './project-details.component';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { BillOfQuantitiesComponent } from './bill-of-quantities/bill-of-quantities.component';
import { RaidLogComponent } from './raid-log/raid-log.component';
import { SiteReportsComponent } from './site-reports/site-reports.component';
import {RouterModule} from "@angular/router";
import {MaterialsModule} from "../../../material/materials/materials.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SharedModule} from "../../../shared/shared.module";
import {ProjectWorkPagesComponent} from "./project-work-pages.component";



@NgModule({
  declarations: [
    ProjectWorkPagesComponent,
//     ProjectDetailsComponent,
    ProjectTasksComponent,
    BillOfQuantitiesComponent,
    RaidLogComponent,
    SiteReportsComponent,

  ],
  imports: [
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
    ProjectWorkPagesComponent,
//     ProjectDetailsComponent,
    ProjectTasksComponent,
    BillOfQuantitiesComponent,
    RaidLogComponent,
    SiteReportsComponent,


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
  ]
})
export class ProjectWorkPagesModule { }
