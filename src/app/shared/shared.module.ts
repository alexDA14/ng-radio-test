import { NgModule } from '@angular/core';

import { DECLARATIONS } from '../constants/declarations.constants';
import { SharedModules } from '../constants/modules.constants';

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...SharedModules,
    ...DECLARATIONS
  ],
  imports: [
    ...SharedModules
  ]
})
export class SharedModule {
}
