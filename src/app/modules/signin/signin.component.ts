import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {SingInService} from "../../service/sing-in.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  rForm : FormGroup;

  username : string = '';
  password : string = '';

  usernameAlert : string = 'Username is required. Please insert your username!';
  passwordAlert : string = 'Password is required. Please insert a password that is between 10 and 20 characters!';
  errorMessage = '';

  constructor(
    private fb : FormBuilder,
    private route: Router,
    private signInService: SingInService
  ) {
    this.rForm = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(2),
        Validators.maxLength(20)])],
      'validate' : ''
    });
   }

  ngOnInit(): void {
  }

  public signInNow(){
    console.log(this.username);
    this.signInService.signInService(this.username, this.password).subscribe(
      result=>{
          console.log("user login succeeded");
          this.route.navigate(["/workPage"]);
      },
      error=>{
        console.log("user login failed");
        this.errorMessage = "Bad credentials, please enter valid email and password";
      })
  }

  addPost(post){
    this.username = post.userName;
    this.password = post.password;
  }

}
