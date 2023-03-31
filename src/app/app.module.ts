import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { HomepageComponent } from './components/homepage.component';
import { TextrotateComponent } from './components/textrotate.component';
import { FooterComponent } from './components/footer.component';
import { HomeservicesComponent } from './components/homeservices.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    TextrotateComponent,
    FooterComponent,
    HomeservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
