import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ViewRoutesComponent } from './view-routes/view-routes.component';
import { ViewHeatmapComponent } from './view-heatmap/view-heatmap.component';
import { ViewBinsComponent } from './view-bins/view-bins.component';
import { ViewFleetComponent } from './view-fleet/view-fleet.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    ViewRoutesComponent,
    ViewHeatmapComponent,
    ViewBinsComponent,
    ViewFleetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
