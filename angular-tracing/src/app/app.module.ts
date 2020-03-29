import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommsHttpInterceptor } from './comms-http-interceptor';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AppComponent, ContentComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CommsHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
