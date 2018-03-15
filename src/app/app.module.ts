import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TractorControlComponent } from './tractor-control/tractor-control.component';
import { FiringFormComponent } from './firing-form/firing-form.component';
import { PrisonerManifestComponent } from './prisoner-manifest/prisoner-manifest.component';
import { AppRoutes } from './app.routes';
import { AuthGuard } from './auth-guard.service';

import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckbox,
  MatCheckboxModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import { PrisonerCardComponent } from './prisoner-manifest/prisoner-card.component';
import { HomeComponent } from './home/home.component';
import { FireButtonComponent } from './firing-form/fire-button.component';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ],
})
export class MaterialImportModule{ }

@NgModule({
  declarations: [
    AppComponent,
    TractorControlComponent,
    FiringFormComponent,
    FireButtonComponent,
    HomeComponent,
    PrisonerManifestComponent,
    PrisonerCardComponent
  ],
  imports: [
    BrowserModule,
    MaterialImportModule,
    AppRoutes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
