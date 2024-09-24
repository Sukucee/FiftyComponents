import { Component, ElementRef, ViewChild } from '@angular/core';

interface TodoList<T> extends Array<T> {
  [index: number]: T;
}

interface TodoItems {
  todoId: number;
  todoName: string;
  todoStatus: 'finished' | 'unfinished';
}

@Component({
  selector: 'app-to-do-manager',
  standalone: true,
  imports: [],
  templateUrl: './to-do-manager.component.html',
  styleUrl: './to-do-manager.component.css'
})
export class ToDoManagerComponent {
  @ViewChild('todoItem') todoItem!: ElementRef;
  todoItems: TodoList<TodoItems> = [];

  addTodo(): void {
      this.todoItems.push({
          todoId: this.todoItems.length,
          todoName: this.todoItem.nativeElement.value,
          todoStatus: 'unfinished',
      });
  }

  changeStatusToFinished(todoId: number): void {
      for (let i = 0; i < this.todoItems.length; i++) {
          const currItem = this.todoItems[i];
          if (currItem.todoId === todoId) {
              currItem.todoStatus = 'finished';
              break;
          }
      }
  }

  removeTodoListItem(todoId: number): void {
      for (let i = 0; i < this.todoItems.length; i++) {
          const currItem = this.todoItems[i];
          if (currItem.todoId === todoId) {
              this.todoItems.splice(i, 1);
              break;
          }
      }
  }
}
