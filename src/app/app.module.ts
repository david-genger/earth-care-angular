import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './footer/footer-component/footer-component.component';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { EarthCareComponent } from './earth-care/earth-care/earth-care.component';
import { DonationCardComponent } from './donation-card/donation-card/donation-card.component';
import { SocialMediaComponentComponent } from './social-media/social-media-component/social-media-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    EarthCareComponent,
    DonationCardComponent,
    SocialMediaComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
