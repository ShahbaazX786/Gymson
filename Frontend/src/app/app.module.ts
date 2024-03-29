import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegisterComponent } from './Components/register/register.component';
import { PricingComponent } from './Components/pricing/pricing.component';
import { HomeComponent } from './Components/home/home.component';
import { FeaturesComponent } from './Components/features/features.component';
import { LocateComponent } from './Components/locate/locate.component';
import { HistoryComponent } from './Components/history/history.component';
import { ContactComponent } from './Components/contact/contact.component';
import { CustomercareComponent } from './Components/customercare/customercare.component';
import { TeamComponent } from './Components/team/team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ngx-bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    PricingComponent,
    HomeComponent,
    FeaturesComponent,
    LocateComponent,
    HistoryComponent,
    ContactComponent,
    CustomercareComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
