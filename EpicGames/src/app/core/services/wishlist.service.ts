import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  gameId: number[] = []
  constructor() { }

  addGameIdIntoStorage(id: number): void{
    this.gameId.push(id)
    localStorage.setItem('wish-list', JSON.stringify(this.gameId));
  }

  removeIdFromLocalStorage(id: number): void{
    this.getGameIdsFromLocalStorage()
    this.gameId.filter(elem=> elem !== id);
    console.log(this.gameId)
  }

  getGameIdsFromLocalStorage(): number[]{
    this.gameId = JSON.parse(localStorage.getItem('wish-list') || '{}')
    return this.gameId
  }
}
