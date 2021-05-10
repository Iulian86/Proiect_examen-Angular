import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SubtaskDtoRequest, SubtaskDtoResponse} from "../model/Subtask";
import {TaskDtoResponse} from "../model/Task";

@Injectable({
  providedIn: 'root'
})
export class SubtaskService {

  baseUrl = 'http://localhost:9191/project-subtask';

  constructor(private http: HttpClient) { }

  saveProjectSubtask(subtask: SubtaskDtoRequest): Observable<SubtaskDtoRequest> {
    return this.http.post<SubtaskDtoRequest>(`${this.baseUrl}`, subtask);
  }

  getProjectSubtasksByName(subtaskName: string, projectTaskId: number): Observable<SubtaskDtoResponse[]> {
    return this.http.get<SubtaskDtoResponse[]>(`${this.baseUrl}?name=${subtaskName}&projectId=${projectTaskId}`);
  }

  // getProjectSubtasksByProjectTaskId(projectTaskId: number): Observable<SubtaskDtoResponse[]> {
  //   return this.http.get<SubtaskDtoResponse[]>(`${this.baseUrl}/task-id/${projectTaskId}`);
  // }

  getProjectSubtasksByProjectId(projectId: number): Observable<SubtaskDtoResponse[]> {
    return this.http.get<SubtaskDtoResponse[]>(`${this.baseUrl}/project/${projectId}`);
  }

  getProjectSubtasksByProjectTaskId(projectTaskId: number): Observable<SubtaskDtoResponse[]> {
    return this.http.get<SubtaskDtoResponse[]>(`${this.baseUrl}/project-task/${projectTaskId}`);
  }

  getProjectSubtasksByProjectTaskIdAndProjectId(projectTaskId: number, projectId: number): Observable<SubtaskDtoResponse[]> {
    return this.http.get<SubtaskDtoResponse[]>
                (`${this.baseUrl}/task-id/?projectTaskId=${projectTaskId}&projectId=${projectId}`);
  }

  getProjectSubtaskById(subtaskId: number): Observable<SubtaskDtoResponse> {
    return this.http.get<SubtaskDtoResponse>(`${this.baseUrl}/${subtaskId}`);
  }

  assignUserToSubtask(subtaskName:string, username:string){
    console.log("called assign user");
    return this.http.get<any>(`${this.baseUrl}/users?subtaskName=${subtaskName}&username=${username}`)
  }

  updateProjectSubtaskStatus(subtaskId: number, newStatus: string): Observable<SubtaskDtoResponse> {
    return this.http.put<SubtaskDtoResponse>(`${this.baseUrl}/status/${subtaskId}?status=${newStatus}`, {});
  }

  update(id: number, value: any):Observable<Object>{
      return this.http.put(`${this.baseUrl}/edit-subtask/${id}`, value);
    }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
