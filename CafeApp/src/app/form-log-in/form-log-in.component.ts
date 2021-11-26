import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'form-log-in',
  templateUrl: './form-log-in.component.html',
  styleUrls: ['./form-log-in.component.css']
})
export class FormLogInComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public onLogIn()
  {
    var name: string = (<HTMLInputElement>document.getElementById("usrN")).value;
    
    if(!(name === ""))
    {
    var rUser: Observable<User> = this.userService.getUserByName(name)
      if(rUser)
      {
        rUser.forEach(e=>{
          if(e.firstName === name)
          {
            (<HTMLDivElement>document.getElementById('login_form')).style.display= 'none';
            (<HTMLDivElement>document.getElementById('card_main')).style.filter = 'none';
          }
          else
          {
            console.log("Undefined");
          }
        })
        
      }
    }
    
  }

}
