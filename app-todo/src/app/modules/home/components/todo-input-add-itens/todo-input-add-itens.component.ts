import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() addItem = new EventEmitter();

  public addItemText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitAddItem() {
    this.addItemText = this.addItemText.trim();

    if (this.addItemText) {
      this.addItem.emit(this.addItemText);
      this.addItemText = '';
    }
  }

}
