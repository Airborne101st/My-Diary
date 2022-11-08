import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnoteComponent } from './addnote/addnote.component';
import { SearchnotesComponent } from './searchnotes/searchnotes.component';
import { AllnotesComponent } from './allnotes/allnotes.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '',         component:AppComponent},
  {path: 'addnote', component:AddnoteComponent},
  {path: 'search',  component:SearchnotesComponent},
  {path: 'allnotes', component:AllnotesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
