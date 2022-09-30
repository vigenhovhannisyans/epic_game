import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  signUp(user: User): void{
    localStorage.setItem('auth-key',JSON.stringify(user))
  }
  getUserAccess(): boolean{
    return !!localStorage.getItem('auth-key');
  }

  getUser(): User{
    return JSON.parse(<string>localStorage.getItem('auth-key'))
  }

  deleteUser(): void{
    localStorage.removeItem('auth-key')
  }
}
