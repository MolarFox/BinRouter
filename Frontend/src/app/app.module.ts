import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { GMAPS_API_KEY } from './gmaps_apikey';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav'
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    AgmCoreModule.forRoot({
      apiKey: GMAPS_API_KEY + '&libraries=visualization'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
