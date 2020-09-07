import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRoutesComponent  } from './view-routes/view-routes.component';
import { ViewHeatmapComponent } from './view-heatmap/view-heatmap.component';
import { ViewBinsComponent    } from './view-bins/view-bins.component';
import { ViewFleetComponent   } from './view-fleet/view-fleet.component';

const routes: Routes = [
  { path: '', redirectTo: '/routes', pathMatch: 'full' },
  { path: 'routes',   component: ViewRoutesComponent  },
  { path: 'heatmap',  component: ViewHeatmapComponent },
  { path: 'bins',     component: ViewBinsComponent    },
  { path: 'fleet',    component: ViewFleetComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
