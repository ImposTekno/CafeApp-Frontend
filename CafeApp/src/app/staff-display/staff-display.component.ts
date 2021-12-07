import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-display',
  templateUrl: './staff-display.component.html',
  styleUrls: ['./staff-display.component.css']
})
export class StaffDisplayComponent implements OnInit {

  public devName: String = "Elhan Halilovic"
  constructor() { }

  ngOnInit(): void {
  }

}
