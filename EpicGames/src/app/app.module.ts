import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { NgxOutsideClickModule } from 'ngx-outside-click';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HotGamesComponent } from './components/shared/hot-games/hot-games.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HotGamesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgxOutsideClickModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
