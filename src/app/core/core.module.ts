import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: []
})
export class CoreModule {
}
