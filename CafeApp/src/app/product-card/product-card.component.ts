import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor() { }
  @Input() p: Product;
  ngOnInit(): void {
  }

}
