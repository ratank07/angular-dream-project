import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './user/add/add.component';
import { EditComponent } from './user/edit/edit.component';
import { HomeComponent } from './user/home/home.component';
import { ShowComponent } from './user/show/show.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, ActivatedRoute } from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    HomeComponent,
    ShowComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   // ActivatedRoute,
    //Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
