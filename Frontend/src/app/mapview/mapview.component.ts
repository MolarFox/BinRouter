import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit(): void {
  }

}
