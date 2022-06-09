import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [{
  path:'',
  component:LoginComponent
},
{
  path:'questions',
  component:QuestionsComponent
},
{
  path:'todo',
  component:TodoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
