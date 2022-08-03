import { Component, DoCheck } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<Task> = JSON.parse(localStorage.getItem('taskList') ?? '[]');

  constructor() { }

  ngDoCheck(): void {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }

  deleteAllTask() {
    this.taskList = []
  }

  addTask(event: string) {
    this.taskList.push({ task: event, checked: false})
  }

  validationInput(event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm('Esta task esta vazia, voce deseja deletar ?');

      if(confirm) {
        this.deleteTask(index);
      }
    }
  }

}
