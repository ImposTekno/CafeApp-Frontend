import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cafe } from '../Cafe';
import { CafeService } from '../cafe.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  products: Product[] = [];
  cafes: Cafe[];
  constructor(private productService: ProductService, private cafeService: CafeService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCafes();
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

  public getCafes():void
  {
    this.cafeService.getCafe().subscribe((response: Cafe[]) =>{
      this.cafes = response;

    });
  }
}
