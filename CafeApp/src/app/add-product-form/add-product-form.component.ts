import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
@Injectable({
  providedIn:'root'
})
export class AddProductFormComponent implements OnInit {
  
  
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  
  }
 


  public addProduct(): void
  {
    let inputName = (<HTMLInputElement>document.getElementById('iName')).value
    let inputPrice = (<HTMLInputElement>document.getElementById('iPrice')).value
    let inputUrl = (<HTMLInputElement>document.getElementById('iUrl')).value
    let inputInfo = (<HTMLInputElement>document.getElementById('iInfo')).value

    let product: Product = new Product();
    let pServ: ProductService= new ProductService(this.http);

    product.productName = inputInfo;
     product.productPrice = +inputPrice;
     product.productInfo = inputInfo;
     product.imgUrl = inputUrl;
     pServ.setProduct(product);
     console.log("Successful");
  }

}
