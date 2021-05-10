import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public username: string;
  public email: string;
  public message: string;

  public static AUTHENTICATED_USER = 'authenticatedUser';
  public static BASIC_AUTH_FLAG_B64 = 'basicAuthFlag';

  constructor() { }

//   signInService(username: string, password: string){
//       return this.http.get('http://localhost:9191/users/logged-user', {
//         headers : {
//           Authorization: this.createAuthorizationHeader(username, password)
//         }
//       }).pipe(map((res) => {
//         this.username = username;
//         this.password = password;
//         sessionStorage.setItem(SingInService.AUTHENTICATED_USER, username);
//       }));
//     }
//
//     createAuthorizationHeader(username: string, password: string) {
//       const authFlag = 'Basic ' + btoa(username + ':' + password);
//       sessionStorage.setItem(SingInService.BASIC_AUTH_FLAG_B64, authFlag);
//       return authFlag;
//     }
//
//     getBasicAuthFlagFromSessionStorage() {
//       return sessionStorage.getItem(SingInService.BASIC_AUTH_FLAG_B64);
//     }
}
