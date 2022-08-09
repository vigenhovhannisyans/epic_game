import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutGameComponent } from './components/about-game/about-game.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'all-games', component: AllGamesComponent},
  {path: 'about-game', component: AboutGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
