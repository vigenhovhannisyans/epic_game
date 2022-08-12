import { Component, OnInit } from '@angular/core';
import { translate } from '@angular/localize/src/utils';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
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
  selectedLanguage = 0
  supportLanguages = ['en', 'ru']
  languages: Language[]=[
    {id: 1, title: 'English', short: 'en'},
    {id: 2, title: 'Russian', short: 'ru'},
    {id: 3, title: 'Armenian', short: 'am'},
  ]
  constructor(
   private authModal: MatDialog,
   private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.translateService.addLangs(this.supportLanguages)
    this.translateService.setDefaultLang('en')
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
    this.translateService.setDefaultLang(lanugage)
    this.selectedLanguage = index;
    this.outsideClick()
  }
  

}
