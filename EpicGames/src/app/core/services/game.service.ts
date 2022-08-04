import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  allGames: Game[] =[
    {
      id: 1,
      image_url: '../../../../assets/images/games/game.svg',
      title: 'Little Tina Fantasy Land',
      about_game: 'Sanatruk',
      operation_system_id:[1],
      price: 150,
      category: 'Sanatruk',
      cover_image_path: '../../../../assets/images/games/cover-1.svg',
    },
    {
      id: 2,
      image_url: '../../../../assets/images/games/game-1.svg',
      title: 'Stifu',
      about_game: 'Sanatruk',
      operation_system_id:[1],
      price: 150,
      category: 'Sanatruk',
      sale: 50,
      cover_image_path: '../../../../assets/images/games/cover-2.svg',
    },
    {
      id: 3,
      image_url: '../../../../assets/images/games/game-3.svg',
      title: 'Red Dead Redemption 2',
      about_game: 'Sanatruk',
      operation_system_id:[1],
      price: 150,
      category: 'Sanatruk',
      sale: 50,
      cover_image_path: '../../../../assets/images/games/cover-3.svg',
    },
    {
      id: 4,
      image_url: '../../../../assets/images/games/game-4.svg',
      title: 'Cyberpunk',
      about_game: 'Sanatruk',
      operation_system_id:[1],
      price: 150,
      category: 'Sanatruk',
      sale: 50,
      cover_image_path: '../../../../assets/images/games/cover-4.svg',
    },
    {
      id: 5,
      image_url: '../../../../assets/images/games/game-5.svg',
      title: 'Kena',
      about_game: 'Sanatruk',
      operation_system_id:[1],
      price: 150,
      category: 'Sanatruk',
      sale: 50,
      cover_image_path: '../../../../assets/images/games/cover-5.svg',

    },
    {
      id: 6,
      image_url: '../../../../assets/images/games/game-6.svg',
      title: 'Vampire: The Masquerade',
      about_game: 'Sanatruk',
      operation_system_id:[1],
      price: 150,
      category: 'Sanatruk',
      sale: 50,
      cover_image_path: '../../../../assets/images/games/cover-6.svg',
    },
    {
      id: 7,
      image_url: '../../../../assets/images/games/game-7.svg',
      title: 'Salt and Sacrifice',
      about_game: 'Sanatruk',
      operation_system_id:[1],
      price: 150,
      category: 'Sanatruk',
      sale: 50,
      cover_image_path: '../../../../assets/images/games/cover-7.svg',
    },
    {
      id: 8,
      image_url: '../../../../assets/images/games/game-8.svg',
      title: 'Jelly Bean Man',
      about_game: 'Sanatruk',
      operation_system_id:[1],
      price: 150,
      category: 'Sanatruk',
      sale: 50,
      cover_image_path: '../../../../assets/images/games/cover-8.svg',
    },
    {
      id: 9,
      image_url: '../../../../assets/images/games/game-9.svg',
      title: 'Little Tina Fantasy Land',
      about_game: 'Sanatruk',
      operation_system_id:[1],
      price: 150,
      category: 'Sanatruk',
      sale: 50,
      cover_image_path: '../../../../assets/images/games/cover-9.svg',
    },
    {
      id: 10,
      image_url: '../../../../assets/images/games/game-10.svg',
      title: 'Evil Dead: The Game',
      about_game: 'Sanatruk',
      operation_system_id:[1],
      price: 150,
      category: 'Sanatruk',
      sale: 50,
      cover_image_path: '../../../../assets/images/games/cover-10.svg',
      
    }
  ]

  constructor() { }


  getAllGames(): Game[]{
    return this.allGames
  }
}
