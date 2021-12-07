import { Component, Input, OnInit } from '@angular/core';
import { Cafe } from '../Cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'cafe-card',
  templateUrl: './cafe-card.component.html',
  styleUrls: ['./cafe-card.component.css']
})
export class CafeCardComponent implements OnInit {

  constructor(private cafeService: CafeService) { }

  @Input( ) c: Cafe;
  ngOnInit(): void {
    //console.log(this.c.maxTables);
  }


  public deleteCafe()
  {
    this.cafeService.deleteCafeByName(this.c.cafeName).subscribe();
    //console.log(this.c.cafeName);

   
  }
}
