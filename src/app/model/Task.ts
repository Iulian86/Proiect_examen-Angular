export class TaskDtoRequest {
  name: string;
  startDate: string;
  endDate: string;
  projectId: number;
  // subtasksIds: number[];
}

export class TaskDtoResponse {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  projectDto: TaskToProjectDtoResponse;
  // projectSubtasksDto: TaskToSubtaskDtoResponse[];
}

export class TaskToProjectDtoResponse {
  id: number;
  name: string;
}

export class TaskToSubtaskDtoResponse {
  id: number;
  subTaskStatus: string;
  assignedUser: string;
  name: string;
}

