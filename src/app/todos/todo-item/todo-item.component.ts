import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input()  
  todo: Todo;
  constructor() { }
  @Output()
  selectedItem: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }

  selectedEvent(e){
    this.selectedItem.emit(this.todo);
  }
}
