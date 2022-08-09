import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allGames!: Game[];
  epicGames!: Game[]
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getAllGames();
  }

  slideConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 1,
    "margin": 32,
    "responsive": [
      {
        breakpoint:1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  
  slickInit(e: any) {
    console.log('slick initialized');
  }
  
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  
  afterChange(e: any) {
    console.log('afterChange');
  }
  
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  getAllGames(): void{
    this.gameService.getAllGames().subscribe(games => {
      this.allGames = games;
      this.getAllEpicGames()
    })
  }

  calculateSale(price: number, sale: number): number{
    return price * sale / 100
  }

  showMoreAboutGame(gameId: number): void{
    console.log(gameId)
  }

  getAllEpicGames(){
  const epicGames = this.allGames.filter(elem => elem.is_epic)
  this.epicGames = epicGames
  }

}
