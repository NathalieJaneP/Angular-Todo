import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  //Tillgång till vår tjänst
  constructor(private service: TodosService) { }

  ngOnInit(): void {
    let todosString: string = localStorage.getItem('todos') || '[]';
    this.todos = JSON.parse(todosString);

    this.service.todos$.subscribe((dataFromService: Todo[]) => {
      this.todos = dataFromService;
    });
    console.log(todosString);
  }

  saveToLs() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  remove(i: number) {
    this.service.removeTodo(i);
    this.saveToLs();
  }

  add(newTodo: Todo) {
    this.service.addTodo(newTodo);
    this.saveToLs();
  }

}
