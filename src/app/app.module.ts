import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "src/app/app-routing.module";
import { AppComponent } from "src/app/app.component";

import { RouterModule } from '@angular/router';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoosModule } from "src/app/todoos/todoos.module";
import { FireConfig } from "fireConfig";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(FireConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    TodoosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
