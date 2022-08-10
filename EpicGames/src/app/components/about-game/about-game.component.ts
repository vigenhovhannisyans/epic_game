import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Game } from 'src/app/core/models/game';
import { GameService } from 'src/app/core/services/game.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-about-game',
  templateUrl: './about-game.component.html',
  styleUrls: ['./about-game.component.scss']
})
export class AboutGameComponent implements OnInit {
  gameId!: number;
  gameById!: Game;
  inWishList = false
  wishGamesId!: number[]
  constructor(
    private activeRoute: ActivatedRoute,
    private gameService: GameService,
    private wishListService: WishlistService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getQueryParam()
    this.getGameById()
    this.getGameIdFromStorage()
  }

  getQueryParam(): void{
    this.activeRoute.queryParams.subscribe(id=>{
      this.gameId = id['gameId']
    })
  }

  calculateSale(price: number, sale: number): number{
    return price * sale / 100
  }

  getGameById(): void{
    this.gameService.getAllGames().subscribe(game => {
      game.filter(game => {
        if(game.id === +this.gameId){
          this.gameById = game
          console.log(this.gameById)
        }
      })

    })
  }

  addToWishList(gameId: number, gameName: string): void{
    this.toastr.success('Successfully added to your wishlist', `${gameName}`)
    this.wishListService.addGameIdIntoStorage(gameId)
  }

  getGameIdFromStorage(): void{
    this.wishGamesId = this.wishListService.getGameIdsFromLocalStorage()
  }

  removeFromWishList(gameId: number, gameName: string): void{
    this.toastr.success('Successfully removed from your wishlist', `${gameName}`)
    this.wishListService.removeIdFromLocalStorage(gameId)
    this.getGameIdFromStorage()
  }


}
