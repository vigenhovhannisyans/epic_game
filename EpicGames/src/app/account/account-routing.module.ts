import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountComponent} from "./account.component";


const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'my-account'},
  {path:'my-account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
