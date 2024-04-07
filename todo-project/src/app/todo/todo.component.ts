import { Component, TemplateRef } from '@angular/core';
import { Todo } from '../class/todo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todoValue: String = '';

  todoList: Todo[] = [
    {
      content: "todo 1",
      value: false
    },
    {
      content: "todo 2",
      value: false
    },
  ];
  constructor(private modalService: NgbModal) { }

  finishedList: Todo[] = [

  ]
  addTodo() {
    this.todoList.push({ content: this.todoValue, value: false });
    this.todoValue = '';
  }
  changeTodo(i: number) {
    const item = this.todoList.splice(i, 1);
    console.log(item);

    this.finishedList.push(item[0]);
  }

  openModal(content: TemplateRef<Element>, i: number, type: String) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        if (type == 'todoList') {
          this.todoList.splice(i, 1);
        } else {
          this.finishedList.splice(i, 1)
        }
      },
      (reason) => {

      }
    )
  }
}
