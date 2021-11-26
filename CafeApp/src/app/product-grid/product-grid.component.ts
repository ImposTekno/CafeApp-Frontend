import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
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
