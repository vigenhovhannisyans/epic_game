import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/game';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-live-streams',
  templateUrl: './live-streams.component.html',
  styleUrls: ['./live-streams.component.scss']
})
export class LiveStreamsComponent implements OnInit {
  liveStream!: Game[]
  filteredLive!: Game[]
  currentPage = 1
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getLiveGames()
  }


  getLiveGames(): void{
    this.gameService.getAllGames().subscribe(game=>{
      this.liveStream = game.filter(game=>game.has_live)
      this.filteredLive = this.liveStream
    })
  }
  changePage(event: number): void{
    this.currentPage = event
  }
  searchGame(event: string): void{
    this.currentPage = 1
    this.filteredLive = this.liveStream.filter(game => game.title.toLocaleLowerCase().includes(event.toLocaleLowerCase()))
  }
}
