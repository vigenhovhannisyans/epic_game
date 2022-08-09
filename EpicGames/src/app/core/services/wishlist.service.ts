import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  gameId: any[] = []
  constructor() { }

  addGameIdIntoStorage(id: number): void{
    this.gameId.push(id) 
    localStorage.setItem('wish-list', JSON.stringify(this.gameId));
  }

  removeIdFromLocalStorage(id: number): void{
    this.getGameIdsFromLocalStorage()
    this.gameId = this.gameId.filter(elem => elem != id);
    this.fetchArrayIntoStorage(this.gameId)
  }

  getGameIdsFromLocalStorage(): number[]{
    this.gameId = JSON.parse(localStorage.getItem('wish-list') || '[]')
    return this.gameId
  }

  fetchArrayIntoStorage(ids: number[]): void{
    localStorage.setItem('wish-list', JSON.stringify(ids));
  }
}
