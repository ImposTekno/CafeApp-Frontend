import { Component, Input, OnInit } from '@angular/core';
import { Cafe } from '../Cafe';
import { Product } from '../Product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input() c: Cafe;
  @Input() p: Product;



  constructor() { }
  ngOnInit(): void {
    
  }

  

}
