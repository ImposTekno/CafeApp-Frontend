import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from './product.service';
import { Product } from './Product';
import { Observable } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CafeApp';
  users: User[] = [];
  public userName: String = "";
  public loggedIn: boolean = false;
  

  constructor(
    private userService: UserService,
     private productService: ProductService, 
     private logInService: LoginService, 
     private mtIconReg: MatIconRegistry,
     private domSanit: DomSanitizer
     )
     {
        this.mtIconReg.addSvgIcon('HomeIcon', this.domSanit.bypassSecurityTrustResourceUrl("../assets/home_cafe_icon.svg"));

      }

  ngOnInit(){
    this.getUsers();
  }

  public getUsers(): void
  {
      this.userService.getUser().subscribe(
        (response: User[]) => {
          this.users = response;
        },
        (error: HttpErrorResponse) =>{
          console.log(error.message);
        }
      );
    
  }
  //Login Button Method
  public logIn()
  {
    this.logInService.setDisplayLogInForm(true);
  }

  ///
}


