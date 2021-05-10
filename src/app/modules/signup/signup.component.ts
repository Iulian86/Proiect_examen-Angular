import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from "../../model/User";
import {Router} from "@angular/router";
import {SignupService} from "../../service/signup.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  registrationMessage='';

  rForm : FormGroup;
  post : any;

  username : string;
  email : string;
  userTypes:string[] =['PROJECT_MANAGER', 'CONSTRUCTION_MANAGER','MEP_MANAGER','COST_MANAGER','SITE_SUPERVISOR']
  password : string;

  usernameAlert : string = 'Username is required. Please insert your username!';
  passwordAlert : string = 'Password is required. Please insert a password that is between 10 and 20 characters!';
  emailAlert : string = 'User email address is missing or has incorrect email form! Please insert a valid email address!';
  // confirmedEmailAlert : string = 'Please retype your email for confirmation';
  userRoleAlert : string = 'User role is required. Please choose your user role!';


  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private route: Router){

    this.rForm = fb.group({
      'username' : [null, Validators.required],
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      // 'confirmedEmail' : [null, Validators.compose([Validators.required, Validators.email])],
      'userRole' : [null, Validators.required],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(2),
        Validators.maxLength(20)])],
      'validate' : ''
    });
  }

  ngOnInit(): void {
  }

  public registerNow(){
    this.signupService.saveUser(this.user).subscribe(
      data=> {
        console.log("user registration succeeded");
        this.route.navigate(["/signin"]);
    },
      error=>{
        console.log("user registration failed");
      })
  }

  // addPost(post){
  //   this.username = post.username;
  //   this.email = post.userEmail;
  //   // this.confirmedEmail = post.confirmedEmail;
  //   this.userTypes = post.userTypes;
  //   this.password = post.password;
  // }

}
