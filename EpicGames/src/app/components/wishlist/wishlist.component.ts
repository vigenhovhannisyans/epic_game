import {Component, OnDestroy, OnInit} from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { GameService } from 'src/app/core/services/game.service';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit, OnDestroy {
  observersStream$ = new Subject<boolean>();
  isSearch = false;
  allGames!: Game[];
  filteredGames!: Game[];
  currentPage = 1;
  sumOfGames = 0;
  constructor(
    private allGamesService: GameService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit(): void {
    this.getAllGames();
    this.getIdsFromStorage()
  }

  getAllGames(): void{
    this.allGamesService.getAllGames().pipe(
      takeUntil(this.observersStream$)
    ).subscribe(gameEvent => {
      this.allGames = gameEvent.filter(game => this.getIdsFromStorage().toString().includes(''+game.id));
      this.filteredGames = this.allGames;
      this.getSumOfGames()
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
    this.currentPage = event
  }

  getIdsFromStorage(): number[]{
    return this.wishlistService.getGameIdsFromLocalStorage()
  }

  getSumOfGames(): void{
    this.allGames.map(game=>{
      if(game.sale){
        this.sumOfGames+= this.calculateSale(game.price, game.sale)
      }else{
        this.sumOfGames+=game.price
      }
    })
  }

  ngOnDestroy(): void {
    this.observersStream$.next(true)
  }

}
