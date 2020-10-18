import { Component, OnInit } from '@angular/core';
import { FleetfetcherService } from '../fleetfetcher.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-view-fleet',
  templateUrl: './view-fleet.component.html',
  styleUrls: ['./view-fleet.component.css']
})
export class ViewFleetComponent implements OnInit {

  all_fleet: Vehicle[];

  // Editor vars
  subtitle = "Scroll through the list to select a vehicle";

  constructor(private fleetfetcher: FleetfetcherService) { }

  ngOnInit(): void {
    this.fleetfetcher.getAllFleet()
      .subscribe(fleet_in => this.all_fleet = fleet_in);
  }

}
