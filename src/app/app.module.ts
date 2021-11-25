import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { TabletComponent } from './tablet/tablet.component';
import { PcComponent } from './pc/pc.component';
import { SigninComponent } from './signin/signin.component';
import { AccessoireComponent } from './accessoire/accessoire.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TelephoneComponent,
    TabletComponent,
    PcComponent,
    SigninComponent,
    AccessoireComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
