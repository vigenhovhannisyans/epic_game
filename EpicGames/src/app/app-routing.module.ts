import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutGameComponent } from './components/about-game/about-game.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { HomeComponent } from './components/home/home.component';
import { LiveStreamsComponent } from './components/live-streams/live-streams.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'all-games', component: AllGamesComponent},
  {path: 'about-game', component: AboutGameComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'live-games', component: LiveStreamsComponent},
  {path: 'account', loadChildren:() => import('../app/account/account.module').then(m => m.AccountModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
