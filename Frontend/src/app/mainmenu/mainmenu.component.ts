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
 import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  // This name started as an off-the-cuff placeholder, looks like it stuck :p
  title = 'BinRouter';
  
  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    /**
     * Called when the page has initialised fully
     * @return {null}
     */
    console.log(`Main menu loaded at time ${new Date()}`)
  }

  // Shows popup with team credits
  showCredits(): void {
    /**
     * Displays a popup with details of our team
     * @return {void}
     */
    const dialogRef = this.dialog.open(CreditsPopup);
    // We don't actually take input from dialogue, don't care when it closes
  }

}


@Component({
  selector: './credits-popup',
  templateUrl: './credits-popup.html',
})
export class CreditsPopup { 

  redirectTo(url: string): void {
    /**
     * Opens a new tab to the given webpage
     * @return {void}
     */
    window.open(url, "_blank");
  }
}
