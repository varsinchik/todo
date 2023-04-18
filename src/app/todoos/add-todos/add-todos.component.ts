import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Itodo } from "src/app/todoos/todooModels";

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.scss']
})
export class AddTodosComponent {

  @Output()
  addedTodoData = new EventEmitter<Itodo>();

  formTodoItem: FormGroup;

  constructor() {
    this.formTodoItem = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }

  addTodo() {
    const formData = this.formTodoItem.value;
    this.addedTodoData.emit(formData);
    this.formTodoItem.reset();
  }
}
