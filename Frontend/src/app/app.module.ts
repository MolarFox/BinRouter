/**
 * Primary module file - this file is where all imports, declarations, etc. occur.
 * 
 * Note that majority of imports are just material design imports, there seems to be many 
 * since each matdes element has its own module. 
 * 
 * Author name:   Rithesh R Jayaram "MolarFox"
 * Student ID:    29687284
 * Last modified: 24-10-2020
 */

import { BrowserModule, Title } from '@angular/platform-browser';
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
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AgmMarkerClustererModule } from '@agm/markerclusterer'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditsPopup, MainmenuComponent } from './mainmenu/mainmenu.component';
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
    ViewFleetComponent,
    CreditsPopup
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
    MatInputModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey: GMAPS_API_KEY,        // This will raise error if API key file is missing
      libraries: ['visualization']  // Required for heatmap rendering
    }),
    AgmMarkerClustererModule
  ],
  entryComponents: [CreditsPopup],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
