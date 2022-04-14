import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HardwareComponent } from './hardware/hardware.component';
import { HardwareDetailComponent } from './hardware/hardware-detail/hardware-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HardwarePriceComponent } from './hardware/hardware-price/hardware-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HardwareComponent,
    HardwareDetailComponent,
    HardwarePriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
