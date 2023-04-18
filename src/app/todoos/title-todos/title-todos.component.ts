import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItodoVsId } from "../todooModels";
import { Observable } from "rxjs";

@Component({
  selector: 'app-title-todos',
  templateUrl: './title-todos.component.html',
  styleUrls: ['./title-todos.component.scss']
})
export class TitleTodosComponent {

  @Input()
  todoItem?: Observable<ItodoVsId[]>

  @Output()
  outItemTodo = new EventEmitter<ItodoVsId>()

}
