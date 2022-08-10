import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/core/models/game';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-about-game',
  templateUrl: './about-game.component.html',
  styleUrls: ['./about-game.component.scss']
})
export class AboutGameComponent implements OnInit {
  gameId!: number;
  gameById!: Game;

  constructor(
    private activeRoute: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getQueryParam()
    this.getGameById()
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


}
