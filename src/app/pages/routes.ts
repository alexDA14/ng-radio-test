import { Routes } from '@angular/router';

import { LayoutComponent } from '../core/components/layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'channel-details/:id',
        loadChildren: () => import('./channel-details/channel-details.module').then(m => m.ChannelDetailsModule)
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
