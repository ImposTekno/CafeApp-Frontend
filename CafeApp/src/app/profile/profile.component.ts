import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  private myProfile: User; 
  public profileImage: String = "https://images.hdqwalls.com/wallpapers/dak-red-anon-guy-4k-0r.jpg";
  public profileUserName: String;
  public profileLastName: String = ""; 
  public hasLoggedIn: boolean = false;
  
  constructor(private routeParam: ActivatedRoute, private userService: UserService) {

   }

   // on init method obviously 
    ngOnInit(): void {         
        this.routeParam.paramMap.subscribe((params) =>{
          if(params.get('username'))
          {
            this.userService.getUserByName(params.get('username') || " ").subscribe((user: User) =>{
              this.myProfile = user;
              if(this.myProfile)
              {
                this.hasLoggedIn = true;
                this.profileUserName = this.myProfile.firstName;
                this.profileLastName = this.myProfile.lastName;
                console.log(this.profileUserName);
              }
              else
              {
                this.hasLoggedIn = false;
              }
            });
          }
        });
      
       
        

    } 




}
