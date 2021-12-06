import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'form-login',
  templateUrl: './form-log-in.component.html',
  styleUrls: ['./form-log-in.component.css']
})
export class FormLogInComponent implements OnInit {


  public uName: string;
  public password: String;

  constructor(private userService: UserService,private logInService: LoginService) { }
  ngOnInit(): void {


  }

  public closeForm()
  {
    this.logInService.setDisplayLogInForm(false);
  }

  public onLogIn()
  {
    this.logInService.setFirstName(this.uName);
    this.logInService.setLastName(this.password);
    this.logInService.setDisplayLogInForm(false);
    this.logInService.setProfileEnabled(true);
    
  }

}
