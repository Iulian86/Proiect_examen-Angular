import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {ContactService} from "../../service/contact.service";

export interface Tile {
  headerColor: string;
  fieldColor: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactUsLeft: Tile[] = [
    {cols: 1.5, rows: 1, headerColor:'feSpecularLighting', fieldColor: '#DCDCDC',
      text:''}
    ];

  contactUsRight: Tile[] = [
    {cols: 2.5, rows: 1, headerColor:'#9F9D9D', fieldColor: '#DCDCDC', text:''}
    ];

  rForm : FormGroup;

  name : string = '';
  email : string = '';
  message : string = '';

  nameAlert : string = 'Name is required. Please insert your name!';
  emailAlert : string = 'Email address is missing or has incorrect email form! Please insert a valid email address!';
  messageAlert : string = 'Message between 10 and 200 characters is required. Please write a message to be sent!';
  errorMessage = '';

  constructor(
  private fb : FormBuilder,
      private route: Router,
      private contactService: ContactService)
      {
      this.rForm = fb.group({
            'username' : [null, Validators.required],
            'mail' : [null, Validators.compose([Validators.required, Validators.email])],
            'mess' : [null, Validators.compose([Validators.required, Validators.minLength(10),
                    Validators.maxLength(200)])],
            'validate' : ''
          });
          }

  ngOnInit(): void {
  }

  public sendContactMessage(){
      console.log(this.name);
//       this.contactService.signInService(this.username, this.password).subscribe(
//         result=>{
//             console.log("user login succeeded");
//             this.route.navigate(["/workPage"]);
//         },
//         error=>{
//           console.log("user login failed");
//           this.errorMessage = "Bad credentials, please enter valid email and password";
//         })
    }

    addPost(post){
      this.name = post.name;
      this.email = post.email;
      this.message = post.message;
    }

}
