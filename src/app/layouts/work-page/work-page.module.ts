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
import { MatDialogModule } from "@angular/material/dialog";

import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsModule } from "../../modules/projects/projects.module";

import { WorkPageComponent } from './work-page.component';

import {ProjectWorkPagesModule} from "../../modules/projects/project-work-pages/project-work-pages.module";



@NgModule({
  declarations: [
    WorkPageComponent,
  ],
  imports: [
    ProjectsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialsModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports:[
    WorkPageComponent
  ]
})
export class WorkPageModule { }
