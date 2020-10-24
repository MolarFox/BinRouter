/**
 * This is the component ts file for the root view / module.
 * It's only direct job is to watch for, and act on any routing events
 * that are raised. Actual routes are defined in the app-routing module .ts file.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // Need router, titleservice, and some way to track active route
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private titleService: Title
  ){}

  // Subscribe to router nav events
  ngOnInit() {
    /**
     * Called when the page has initialised fully
     * @return {null}
     */
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const crt = this.getChild(this.activeRoute);
      crt.data.subscribe(
        data => {
          this.titleService.setTitle(data.title);
        }
      );
    });
  }

  // Helper function to get active route at a given time
  getChild(activeRouteLocal: ActivatedRoute): ActivatedRoute{
    /**
     * Gets the active route (eg: in terms of app routing) at a given time
     * @param {ActivatedRoute} activeRouteLocal the active route
     * @return {ActivatedRoute} the child of the active route
     */
    if (activeRouteLocal.firstChild){
      return this.getChild(activeRouteLocal.firstChild);
    }else{
      return activeRouteLocal;
    }
  }
  
}
