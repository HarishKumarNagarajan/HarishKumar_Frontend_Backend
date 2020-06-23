import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { PastresultComponent } from './pastresult/pastresult.component';


const routes: Routes = [
  { path:"", component: DisplayComponent},
  { path:"past", component:PastresultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
