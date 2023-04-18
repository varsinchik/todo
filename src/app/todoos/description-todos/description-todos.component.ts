import {Component, Input} from '@angular/core';
import {ItodoItems} from "../todooModels";
@Component({
  selector: 'app-description-todos',
  templateUrl: './description-todos.component.html',
  styleUrls: ['./description-todos.component.scss']
})
export class DescriptionTodosComponent {
  @Input()
  descriptionTodoItem?: ItodoItems

}
