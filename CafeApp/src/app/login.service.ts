import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private firstName = new Subject<string>();
  private lastName = new Subject<String>();
  private formDisplay = new Subject<boolean>();
  private profileEnabled = new Subject<boolean>();
  
  private isLoggedIn: boolean;
  //private isAdmin:boolean;

  constructor() { }


  // logginSwitch for forms and displaying contetnt 
  public set loggedIn(inLog : boolean) {
    this.isLoggedIn = inLog;
  }

  public get loggedIn() : boolean {
    return this.isLoggedIn;
  }
  

  // get and set user name and last name of logged user (this is only for the client session)

  //First Name getter & setter method
  public getFirstName(): Subject<string>
  {
    return this.firstName;
  }
  public setFirstName(inName: string)
  {
    this.firstName.next(inName);
  }

  //Last Name getter & setter method
  public getLastName(): Subject<String>
  {
    return this.lastName;
  }
  public setLastName(inLastName: String )
  {
    this.lastName.next(inLastName);
  }


  // functionality to trigger form display (log in form)
  public  getDisplayLogInForm() :Subject<boolean>
  {
    return this.formDisplay;
  }
  
  
  public setDisplayLogInForm(inBool : boolean) {
    this.formDisplay.next(inBool);
  }
  
  // Return handle for profile content on home page
  public getProfileEnabled():Subject<boolean>
  {
    return this.profileEnabled;
  }

  public setProfileEnabled(inBool: boolean)
  {
    this.profileEnabled.next(inBool);
  }
  
  
  

}
