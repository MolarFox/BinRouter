/**
 * Main menu component
 * 
 * Very basic 50px high bar which has button toggles for navigating to the four
 * views within the webapp. This component is always visible so long as the app is loaded.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

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
    /**
     * Called when the page has initialised fully
     * @return {null}
     */
  }

}
