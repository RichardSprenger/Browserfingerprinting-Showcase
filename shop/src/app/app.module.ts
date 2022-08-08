import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FingerprintjsProAngularModule } from '@fingerprintjs/fingerprintjs-pro-angular';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FingerprintjsProAngularModule.forRoot({loadOptions: {
      apiKey: "F3OByzO6je3Izn9H0Aux", region: "eu"
    }}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
