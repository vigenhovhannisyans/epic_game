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
  allGames!: Game[];
  filteredGames!: Game[];
  currentPage = 1;
  constructor(
    private allGamesService: GameService
  ) { }

  ngOnInit(): void {
    this.getAllGames()
  }

  getAllGames(): void{
    this.allGamesService.getAllGames().subscribe(gameEvent=>{
      this.allGames = gameEvent;
      this.filteredGames = this.allGames
    })
  }

  calculateSale(price: number, sale: number): number{
    return price * sale / 100
  }

  searchGame(event: string): void{
    this.isSearch = true;
    this.currentPage = 1;
    this.filteredGames = this.allGames.filter(game => game.title.toLocaleLowerCase().includes(event.toLocaleLowerCase()));
  }
  
  redirectToAboutGamePage(id: number): void{
    this.allGamesService.redirectToAboutGamePage(id);
  }

  changePage(event: number): void{
    this.currentPage = event;
  }
}
