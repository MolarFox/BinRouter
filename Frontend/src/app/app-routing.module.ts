/**
 * Routing file
 * 
 * All routes as well as their associated paths and titles are defined here.
 * Actual routing (event listening) occurs in root app component file.
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRoutesComponent  } from './view-routes/view-routes.component';
import { ViewHeatmapComponent } from './view-heatmap/view-heatmap.component';
import { ViewBinsComponent    } from './view-bins/view-bins.component';
import { ViewFleetComponent   } from './view-fleet/view-fleet.component';

const appTitle: String = "BinRouter";

// All possible routes in the app are defined here
const routes: Routes = [
  { path: '', redirectTo: '/routes', pathMatch: 'full' },
  { path: 'routes',   component: ViewRoutesComponent,    
    data:{
      title: appTitle + " - Routes"
    }
  },

  { path: 'heatmap',  component: ViewHeatmapComponent,
    data:{
      title: appTitle + " - Heatmap"
    }
  },

  { path: 'bins',     component: ViewBinsComponent,
    data:{
      title: appTitle + " - Bins"
    }
  },

  { path: 'fleet',    component: ViewFleetComponent,
    data:{
      title: appTitle + " - Fleet"
    }
  }
];

// The whole module has a higher precedence due to the job it performs, loads in on main app view
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
