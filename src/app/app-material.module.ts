import {NgModule} from '@angular/core';

import {
  MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatProgressSpinnerModule
} from "@angular/material";

const material = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatDialogModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class AppMaterialModule { }
