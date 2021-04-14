import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

const MaterialModules = [
  MatSnackBarModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule
];

export const SharedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule,
  ...MaterialModules
];
