import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FiringFormComponent } from './firing-form.component';
import { FireButtonComponent} from './fire-button.component';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatDividerModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [
    FireButtonComponent,
    FiringFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class FiringFormModule { }