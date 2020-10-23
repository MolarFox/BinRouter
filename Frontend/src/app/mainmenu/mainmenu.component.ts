import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  // This name started as an off-the-cuff placeholder, looks like it stuck :p
  title = 'BinRouter';
  
  constructor() { }

  ngOnInit(): void {
  }

}
