import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestbphComponent } from './testbph/testbph.component';
import { WashroomfinderComponent } from './washroomfinder/washroomfinder.component';
import { BphfinderComponent } from './bphfinder/bphfinder.component';
import { AddbphComponent } from './addbph/addbph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChemistlocatorComponent } from './chemistlocator/chemistlocator.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TestbphComponent,
    WashroomfinderComponent,
    BphfinderComponent,
    AddbphComponent,
    ChemistlocatorComponent,
    ImagecomponentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
