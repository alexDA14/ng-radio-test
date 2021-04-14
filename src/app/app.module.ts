import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioChannelsMockService } from './core/api/mocks/radio-channels-mock/radio-channels-mock.service';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(RadioChannelsMockService, { delay: 800 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
