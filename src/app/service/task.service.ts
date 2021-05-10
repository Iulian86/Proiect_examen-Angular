import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskDtoRequest, TaskDtoResponse} from "../model/Task";
import {ProjectResponseDto} from "../model/Project";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  baseUrl = "http://localhost:9191/project-tasks";

  constructor(private http: HttpClient) { }

  saveProjectTask(task: TaskDtoRequest): Observable<TaskDtoRequest> {
    return this.http.post<TaskDtoRequest>(`${this.baseUrl}`, task);
  }

  getProjectTaskList():Observable<TaskDtoResponse[]>{
    return this.http.get<TaskDtoResponse[]>(`${this.baseUrl}`);
  }

  getProjectTaskById(id: number):Observable<TaskDtoResponse>{
    return this.http.get<TaskDtoResponse>(`${this.baseUrl}/${id}`);
  }

  getProjectTasksByProjectId(projectId: number): Observable<TaskDtoResponse[]> {
    return this.http.get<TaskDtoResponse[]>(`${this.baseUrl}/project-id/?projectId=${projectId}`);
  }

  update(id: number, value: any):Observable<Object>{
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
