import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { NgxOutsideClickModule } from 'ngx-outside-click';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HotGamesComponent } from './components/shared/hot-games/hot-games.component';
import { SearchComponent } from './components/shared/search/search.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutGameComponent } from './components/about-game/about-game.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthModalComponent } from './components/shared/auth-modal/auth-modal.component';
import { LiveStreamsComponent } from './components/live-streams/live-streams.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HotGamesComponent,
    SearchComponent,
    AllGamesComponent,
    AboutGameComponent,
    WishlistComponent,
    AuthModalComponent,
    LiveStreamsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgxOutsideClickModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
