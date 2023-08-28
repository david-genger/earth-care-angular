import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer/footer-component/footer-component.component';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { EarthCareComponent } from './earth-care/earth-care/earth-care.component';
import { DonationCardComponent } from './donation-card/donation-card/donation-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    EarthCareComponent,
    DonationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
