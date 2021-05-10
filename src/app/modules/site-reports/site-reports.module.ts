import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectListComponent} from "../projects/project-list/project-list.component";
import {ProjectDetailedViewComponent} from "../projects/project-detailed-view/project-detailed-view.component";
import {CreateProjectComponent} from "../projects/create-project/create-project.component";
import {ProjectsMenuComponent} from "../projects/projects-menu/projects-menu.component";
import {MaterialsModule} from "../../material/materials/materials.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {RouterModule} from "@angular/router";
import {DragDropModule} from "@angular/cdk/drag-drop";



@NgModule({
  declarations: [],
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
    DragDropModule,
  ],
  exports:[
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
  ]
})
export class SiteReportsModule { }
