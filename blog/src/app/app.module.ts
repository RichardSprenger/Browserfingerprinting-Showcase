import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FingerprintjsProAngularModule } from '@fingerprintjs/fingerprintjs-pro-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AdsComponent } from './pages/ads/ads.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BlogComponent,
    AdsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FingerprintjsProAngularModule.forRoot({loadOptions: {
      apiKey: "F3OByzO6je3Izn9H0Aux", region: "eu"
    }}),
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
