import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationService } from './registration.service';
// import { ProjectService } from './project.service';
// import { ProjectNotificationService } from './project-notification.service';
// import { DatePipe } from '@angular/common';

import { IntroductionPageModule } from './layouts/introduction-page/introduction-page.module';
import { WorkPageModule } from './layouts/work-page/work-page.module';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpInterceptorService} from "./service/http-interceptor.service";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IntroductionPageModule,
        WorkPageModule,
        SharedModule,
    ],
  providers: [
    RegistrationService,
    {provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true}
    // ProjectService, ProjectNotificationService, DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
