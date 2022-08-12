import { Component, OnInit } from '@angular/core';
import { translate } from '@angular/localize/src/utils';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
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
  languages: Language[]=[
    {id: 1, title: 'English'},
    {id: 2, title: 'Russian'},
    {id: 3, title: 'Armenian'},
  ]
  constructor(
   private authModal: MatDialog
  ) { }

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
    this.selectedLanguage = index;
    this.outsideClick()
  }
  

}
