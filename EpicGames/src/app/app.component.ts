import { Component, OnInit } from '@angular/core';
import { WishlistService } from './core/services/wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EpicGames';

  constructor(
    private wishListService: WishlistService,

  ){}

  ngOnInit(): void {
    this.wishListService.getGameIdsFromLocalStorage()
  }
}
