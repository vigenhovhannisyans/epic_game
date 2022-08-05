import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showLanguage = false
  constructor() { }

  ngOnInit(): void {
  }

  showLanguageBlock(): void{
    if(!this.showLanguage){
      this.showLanguage = true
    }else if(this.showLanguage){
      this.showLanguage = false
    }
  }

  outsideClick(): void{
    this.showLanguage = false
  }
  

}
