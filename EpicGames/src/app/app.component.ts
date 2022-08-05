import { Component, OnInit } from '@angular/core';
import { WishlistService } from './core/services/wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EpicGames';
  slides = [
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
    {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"},
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};

  constructor(
    private wishListService: WishlistService,

  ){}

  ngOnInit(): void {
    this.wishListService.getGameIdsFromLocalStorage()
  }


  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
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
}
