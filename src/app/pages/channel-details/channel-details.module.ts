import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';

const routes: Routes = [
  { path: '', component: ChannelDetailsComponent }
];

@NgModule({
  declarations: [
    ChannelDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    SharedModule
  ]
})
export class ChannelDetailsModule {
}
