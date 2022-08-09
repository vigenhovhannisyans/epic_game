import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { GameService } from 'src/app/core/services/game.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from 'src/app/core/services/wishlist.service';
@Component({
  selector: 'app-hot-games',
  templateUrl: './hot-games.component.html',
  styleUrls: ['./hot-games.component.scss']
})
export class HotGamesComponent implements OnInit {
  selectedGameImageUrl = '../../../../assets/images/games/game.svg';
  allGames!: Game[]
  wishGamesId: number[] =[]
  selectedGame!: Game
  selectedIndex = 0
  constructor(
    private gameService: GameService,
    private toastr: ToastrService,
    private wishListService: WishlistService,
  ) { }

  ngOnInit(): void {
    this.getAllGames();
    this.getGameIdFromStorage()
  }

  getAllGames(): void{
    this.gameService.getAllGames().subscribe(gameEvent => {
      this.allGames = gameEvent
      this.selectedGame = this.allGames[0];

    })
  }

  selectGame(selectedGame: Game, index: number): void{
    this.selectedGame = selectedGame
    this.selectedGameImageUrl = selectedGame.cover_image_path
    this.selectedIndex = index
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
