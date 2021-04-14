import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CoreModule,
    InfiniteScrollModule
  ]
})
export class HomeModule {
}
