import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { BinfetcherService } from '../binfetcher.service'
import { Bin } from '../bin';

@Component({
  selector: 'app-view-bins',
  templateUrl: './view-bins.component.html',
  styleUrls: ['./view-bins.component.css']
})
export class ViewBinsComponent implements OnInit {

  start_lat = -37.8142588;
  start_lng = 144.9666622;
  start_zoom = 14;

  all_bins: Bin[] = [];
  markers: any[] = [];  // Can't find typedef

  constructor(private binfetcher: BinfetcherService) { }

  ngOnInit(): void {
    this.binfetcher.getAllBins()
      .subscribe(bins_in => this.process_markers(bins_in));
  }

  // Set instance bins variable, convert all to markers and display
  process_markers(bins: Bin[]){
    this.all_bins = bins;
    bins.forEach(bin =>
      this.markers.push(
        {
          draggable: false,
          lat: bin.lat,
          lng: bin.lng 
        }
      )
    )
  }

  // Handles clicks on the map
  mapClicked(event: Event){

  }

  // Handles clicks to a marker
  clickedMarker(label: string, index: number){
    
  }
}
