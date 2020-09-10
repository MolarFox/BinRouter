import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GMAPS_API_KEY } from './gmaps_apikey';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ViewRoutesComponent } from './view-routes/view-routes.component';
import { ViewHeatmapComponent } from './view-heatmap/view-heatmap.component';
import { ViewBinsComponent } from './view-bins/view-bins.component';
import { ViewFleetComponent } from './view-fleet/view-fleet.component';
import { EditorBinsComponent } from './editor-bins/editor-bins.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    ViewRoutesComponent,
    ViewHeatmapComponent,
    ViewBinsComponent,
    ViewFleetComponent,
    EditorBinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: GMAPS_API_KEY + '&libraries=visualization'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
