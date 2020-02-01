import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoItemComponent } from './todos/todo-item/todo-item.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';


const routes: Routes = [{
  path:'', component:HomeComponent
}, {
  path:'todos', loadChildren:'./todos/todos.module#TodosModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
