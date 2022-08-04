import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-hot-games',
  templateUrl: './hot-games.component.html',
  styleUrls: ['./hot-games.component.scss']
})
export class HotGamesComponent implements OnInit {
  selectedGameImageUrl = '../../../../assets/images/games/game.svg';
  allGames!: Game[]
  selectedIndex = 0
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  getAllGames(): void{
   this.allGames = this.gameService.getAllGames();
  }

  selectGame(selectedGame: Game, index: number): void{
    this.selectedGameImageUrl = selectedGame.cover_image_path
    console.log(selectedGame);
    this.selectedIndex = index
  }

}
