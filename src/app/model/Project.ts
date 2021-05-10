export class ProjectRequestDto {
  name: string;
  location: string;
  startDate: string;
  finishedDate: string;
}

export class ProjectResponseDto {
  id: number;
  name: string;
  location: string;
  registeredOn: string;
  startDate: string;
  finishedDate: string;
  administrator: MinimumUserInfoDto;
  assignedUsers: MinimumUserInfoDto[];
  sprintNumbers: number;
}


export class MinimumUserInfoDto {
  id: number;
  name: string;
  emailAddress: string;
  roles: string[];
}
