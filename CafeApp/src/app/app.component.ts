import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from './product.service';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CafeApp';
  users: User[] = [];
  products: Product[] = [];

  constructor(private userService: UserService, private productService: ProductService ,private mtIconReg: MatIconRegistry,private domSanit: DomSanitizer){
    this.mtIconReg.addSvgIcon('HomeIcon', this.domSanit.bypassSecurityTrustResourceUrl("../assets/home_cafe_icon.svg"));

  }

  ngOnInit(){
    this.getProducts();
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

  public getProducts(): void 
  {
    this.productService.getProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) =>
      {
        console.log(error.message);
      }
    )
  }
}


