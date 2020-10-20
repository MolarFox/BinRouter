import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { BinfetcherService } from '../binfetcher.service';
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

  all_bins: [Bin, BinExtra][] = [];
  selbin: [Bin, BinExtra];

  // Editor vars
  subtitle = "Pick a bin to begin editing"
  picker_active: boolean = false;

  constructor(private binfetcher: BinfetcherService) { }

  ngOnInit(): void {
    this.binfetcher.getAllBins()
      .subscribe(bins_in => this.process_markers(bins_in));
  }

  // Set instance bins variable, convert all to markers and display
  process_markers(bins: Bin[]){
    bins.forEach(bin =>
      this.all_bins.push(
        [ bin,{ "draggable": false } ]
      )
    )
  }

  // Handles clicks on the map
  mapClicked(event: Event){

  }

  // handles drag completions of marker
  draggedMarker(e: any): void {
    console.log(e);
  }

  // Handles clicks to a marker
  clickedMarker(index: number): void {
    this.selbin = this.all_bins[index];
  }
}

interface BinExtra {
  draggable: boolean
}
