import {MinimumUserInfoDto} from "./Project";
import {TaskToProjectDtoResponse} from "./Task";

export class SubtaskDtoRequest {
  name: string;
  startDate: string;
  targetDate: string;
  status: string;
  weight: number;
  statusPercentage: number;
  username: string;
  // projectId: number;
  projectTaskId: number;
}

export class SubtaskDtoResponse {
  id: number;
  name: string;
  startDate: string;
  targetDate: string;
  status: string;
  statusPercentage: number;
  weight: number;
  projectDto: SubtaskToProjectDtoResponse;
  projectTaskDto: SubtaskToTaskDtoResponse;
  assignedUsers: MinimumUserInfoDto[];
  userInfo: MinimumUserInfoDto;
}

// export class MinimumUserInfoDto {
//   id: number;
//   name: string;
//   emailAddress: string;
//   roles: string[];
// }

export class SubtaskToProjectDtoResponse {
  id: number;
  name: string;
}

export class SubtaskToTaskDtoResponse {
  id: number;
  name: string;
}


