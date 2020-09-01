import { Component, OnInit } from '@angular/core';
import { Trash } from '../testhero';
import { TRASH_BINS } from '../mock-data';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  trash_bins = TRASH_BINS;

  dumpster: Trash = this.trash_bins[0];
  onSelect(curr_dumpster: Trash): void {
    this.dumpster = curr_dumpster
  }

  /*dumpster: Trash = {
    id: 69,
    name: 'Big JCs waste bin',
    likes_chicken_tendies: true
  }*/

  //dumpster = 'oaaaoaoaoaoa';

  constructor() { }



  ngOnInit(): void {
  }

}
