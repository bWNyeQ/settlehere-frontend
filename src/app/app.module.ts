import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { TodoComponent } from './components/todo/todo.component';
import { ItemComponent } from './components/todo/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionsComponent,
    TodoComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
