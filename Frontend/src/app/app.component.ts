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
  getChild(activeRouteLocal: ActivatedRoute){
    if (activeRouteLocal.firstChild){
      return this.getChild(activeRouteLocal.firstChild);
    }else{
      return activeRouteLocal;
    }
  }
  
}
