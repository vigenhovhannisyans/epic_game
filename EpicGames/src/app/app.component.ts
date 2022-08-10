import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { WishlistService } from './core/services/wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EpicGames';
  hideHotGameComponent = false
  constructor(
    private wishListService: WishlistService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.wishListService.getGameIdsFromLocalStorage()
    this.checkUrl()
  }

  checkUrl():void{
    this.router.events.subscribe(urlEvent=>{
      if(urlEvent instanceof NavigationEnd){
        if(urlEvent.url.includes('/about-game')){
          this.hideHotGameComponent = true
        }else{
          this.hideHotGameComponent = false
        }

      }
    })
  }
}
