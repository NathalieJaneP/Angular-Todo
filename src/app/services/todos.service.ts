import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[] =
    [
      new Todo('Go to the gym'),
      new Todo('Vacuum'),
      new Todo('Do the dishes')
    ];

  //Of create next for us which will be called when we make change
  todos$: Observable<Todo[]> = of(this.todos);

  addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    console.log(this.todos);
  }

  removeTodo(i: number) {
    this.todos.splice(i, 1);
  }

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }


}
