import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProjectRequestDto, ProjectResponseDto} from "../model/Project";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = 'http://localhost:9191/projects';

  constructor(private http: HttpClient) { }

  saveProject(project: ProjectRequestDto):Observable<Object>{
    return this.http.post(`${this.baseUrl}`, project);
  }

  getProjectList(): Observable<ProjectResponseDto[]> {
    return this.http.get<ProjectResponseDto[]>(`${this.baseUrl}/all`);
  }

  getProjectById(id: number):Observable<ProjectResponseDto>{
    return this.http.get<ProjectResponseDto>(`${this.baseUrl}/${id}`);
  }

// send email
  // assignUserToProject(projectName:string, username:string){
  //   console.log("called assign user");
  //   const obj = this.http.get<any>(`${this.baseUrl}/assign-users?projectName=${projectName}&username=${username}`)
  //     .subscribe(data => {
  //       console.log(data);
  //     }, error => {
  //       console.log(error);
  //     });
  //   console.log(obj);
  // }

  assignUserToProject(projectName:string, username:string){
    console.log("called assign user");
    return this.http.get<any>(`${this.baseUrl}/users?projectName=${projectName}&username=${username}`)
  }

  update(id: number, value: any):Observable<Object>{
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
