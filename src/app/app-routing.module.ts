import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { appRoutes } from './pages/routes';

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes, { onSameUrlNavigation: 'reload', preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
