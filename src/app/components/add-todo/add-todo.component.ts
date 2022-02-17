import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todoText: string = '';

  constructor(private service: TodosService) { }

  ngOnInit(): void { }
  handleChange(valueFromUser: string) {
    this.todoText = valueFromUser;
  }
  save() {
    let newTodo: Todo = new Todo(this.todoText);
    this.service.addTodo(newTodo);
  }
}
