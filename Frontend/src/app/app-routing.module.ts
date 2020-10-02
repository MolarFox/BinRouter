import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRoutesComponent  } from './view-routes/view-routes.component';
import { ViewHeatmapComponent } from './view-heatmap/view-heatmap.component';
import { ViewBinsComponent    } from './view-bins/view-bins.component';
import { ViewFleetComponent   } from './view-fleet/view-fleet.component';

const appTitle: String = "BinRouter";

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
