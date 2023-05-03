import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { TodooService } from "src/app/todoos/todooService";

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.scss']
})
export class AddTodosComponent {
  formTodoItem: FormGroup;

  constructor(private _todooService: TodooService) {
    this.formTodoItem = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }

  addTodo() {
    if (this.formTodoItem.valid) {
      const formData = this.formTodoItem.value;
      this._todooService.addItemInCollection(formData)
      this.formTodoItem.reset();
    }
  }
}
