import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {
  isSearch = false;
  allGames!: Game[]
  filteredGames!: Game[]
  constructor(
    private allGamesService: GameService
  ) { }

  ngOnInit(): void {
    this.getAllGames()
  }

  getAllGames(): void{
    this.allGamesService.getAllGames().subscribe(gameEvent=>[
      this.allGames = gameEvent
    ])
  }

  calculateSale(price: number, sale: number): number{
    return price * sale / 100
  }

  searchGame(event: string): void{
    this.isSearch = true
    console.log(event);
    this.filteredGames = this.allGames.filter(game => game.title.toLocaleLowerCase().includes(event))
  }
  
  redirectToAboutGamePage(id: number): void{
    this.allGamesService.redirectToAboutGamePage(id);
  }

}
