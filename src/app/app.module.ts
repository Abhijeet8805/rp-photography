import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgsRevealModule} from 'ng-scrollreveal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SwiperModule } from 'swiper/angular';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Shoot1Component } from './Shoots/shoot1/shoot1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryConfig, GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
export const config : GalleryConfig = {
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutmeComponent,
    ContactmeComponent,
    OurservicesComponent,
    PortfolioComponent,
    Shoot1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule.forRoot(),
    SwiperModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
