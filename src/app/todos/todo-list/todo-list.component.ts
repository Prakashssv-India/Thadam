import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.todos = data;
      console.log(data);
    });
  }
  onSelectedEvent(event){
    console.log(event);
  }
}
