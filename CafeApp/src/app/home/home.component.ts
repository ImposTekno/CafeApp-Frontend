import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logInService:LoginService) { }

  public factText: String = "This is hardcoded fact for coffee lovers!";
  public menu: boolean = false;
  public isOpen: boolean = false;
  public accountName: String = "";
  public enableProfile: boolean = false;
  public displayForm: boolean = false;


  ngOnInit(): void {
    
  }

  // Called on log in to display data visible only to the registered users 
  public checkForLogin()
  {
    this.logInService.getDisplayLogInForm().subscribe((response: boolean) => {

      this.displayForm = response;
    });
    this.logInService.getFirstName().subscribe((resName: string)=>{
      this.accountName = resName;
    });
    this.logInService.getProfileEnabled().subscribe((resProfile: boolean) =>{

      this.enableProfile = resProfile;
    });
    return this.displayForm;
    
  }

  // Drawer Menu button toggle mechanic 
  toggleContent()
  {
    if(this.menu == true)
    {
      this.menu = false;
      this.isOpen = false;
    }
    else
    {
      this.menu = true;
      this.isOpen = true;
    }
  }

}
