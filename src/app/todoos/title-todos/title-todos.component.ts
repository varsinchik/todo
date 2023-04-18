import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItodoItems} from "../todooModels";
import {Observable} from "rxjs";
@Component({
  selector: 'app-title-todos',
  templateUrl: './title-todos.component.html',
  styleUrls: ['./title-todos.component.scss']
})
export class TitleTodosComponent {

  @Input()
  todoItem?: Observable<ItodoItems[]>

  @Output()
  outItemTodo = new EventEmitter<ItodoItems>()

}
