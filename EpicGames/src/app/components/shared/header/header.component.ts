import { Component, OnInit } from '@angular/core';
import { translate } from '@angular/localize/src/utils';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/core/models/language';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showLanguage = false
  lang!:any
  selectedLanguage = 0
  supportLanguages = ['en', 'ru']
  languages: Language[]=[
    {id: 0, title: 'English', short: 'en'},
    {id: 1, title: 'Russian', short: 'ru'},
    {id: 2, title: 'Armenian', short: 'am'},
  ]
  constructor(
   private authModal: MatDialog,
   private translateService: TranslateService,
   private route: Router,
   private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('language')
    this.translateService.addLangs(this.supportLanguages)

    if(this.lang !== null){
      this.setSelectedLanguage(this.lang)
      this.translateService.setDefaultLang(this.lang)
    }else{
      this.translateService.setDefaultLang('en')
    }
    this.activatedRoute.queryParams.subscribe((param: any)=>{
      if(param.lang !==undefined){
        this.translateService.use(param.lang)
      }
    })
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

  openDialog() {
    let dialogConfig = new MatDialogConfig();
    dialogConfig={
      'width': '700px',
      'height': 'max-content',
      'panelClass': 'auth-modal'
    }
    const dialogRef = this.authModal.open(AuthModalComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  selectLanguage(lanugage: string, index: number){
    this.route.navigate([],{queryParams:{'lang': lanugage}})
    localStorage.setItem('language',lanugage)
    this.translateService.use(lanugage)
    this.selectedLanguage = index;
    this.outsideClick()
  }

  setSelectedLanguage(short: string): void{
    this.languages.map(language => {
      if(language.short === short){
        this.selectedLanguage = language.id
      }
    })
  }
  

}
