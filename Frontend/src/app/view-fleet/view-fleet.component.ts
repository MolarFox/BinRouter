import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-fleet',
  templateUrl: './view-fleet.component.html',
  styleUrls: ['./view-fleet.component.css']
})
export class ViewFleetComponent implements OnInit {

  // Editor vars
  subtitle = "Scroll through the list to select a vehicle";

  constructor() { }

  ngOnInit(): void {
  }

}
