import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExpenceGetComponent } from './components/expence-get/expence-get.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AddcompComponent } from './components/addcomp/addcomp.component';


const routers: Routes =[
  {path: 'expence', component:ExpenceGetComponent},
  {path: 'addexp', component:AddcompComponent},
 
  {path: '', redirectTo:'/expence', pathMatch:'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    ExpenceGetComponent,
    AddcompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
