import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import { WorkpageHeaderComponent } from './components/workpage-header/workpage-header.component';
import { WorkpageSidebarComponent } from './components/workpage-sidebar/workpage-sidebar.component';
import { WorkpageFooterComponent } from './components/workpage-footer/workpage-footer.component';
import { IntroductionPageHeaderComponent } from './components/introduction-page-header/introduction-page-header.component';
import { IntroductionPageFooterComponent } from './components/introduction-page-footer/introduction-page-footer.component';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ProjectPageHeaderComponent } from './components/project-page-header/project-page-header.component';
import { ProjectPageFooterComponent } from './components/project-page-footer/project-page-footer.component';



@NgModule({
  declarations: [
    IntroductionPageHeaderComponent,
    IntroductionPageFooterComponent,
    WorkpageHeaderComponent,
    WorkpageFooterComponent,

    WorkpageSidebarComponent,
    ProjectPageHeaderComponent,
    ProjectPageFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
    exports: [
        WorkpageHeaderComponent,
        WorkpageSidebarComponent,
        WorkpageFooterComponent,
        IntroductionPageHeaderComponent,
        IntroductionPageFooterComponent,
        FlexLayoutModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule,
        ProjectPageHeaderComponent,
    ]
})
export class SharedModule { }
