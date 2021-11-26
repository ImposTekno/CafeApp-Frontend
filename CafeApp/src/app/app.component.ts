import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from './product.service';
import { Product } from './Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CafeApp';
  users: User[] = [];
  

  constructor(private userService: UserService, private productService: ProductService ,private mtIconReg: MatIconRegistry,private domSanit: DomSanitizer){
    this.mtIconReg.addSvgIcon('HomeIcon', this.domSanit.bypassSecurityTrustResourceUrl("../assets/home_cafe_icon.svg"));

  }

  ngOnInit(){
    //this.getProducts();
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

  public displayLogInForm(): void
  {
    (<HTMLDivElement>document.getElementById('login_form')).style.display= 'flex';
    (<HTMLDivElement>document.getElementById('card_main')).style.filter = 'blur(5px)';
  }


  ///
}


