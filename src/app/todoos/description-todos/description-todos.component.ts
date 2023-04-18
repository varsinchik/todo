import { Component, Input } from '@angular/core';
import { ItodoVsId } from "src/app/todoos/todooModels";

@Component({
  selector: 'app-description-todos',
  templateUrl: './description-todos.component.html',
  styleUrls: ['./description-todos.component.scss']
})
export class DescriptionTodosComponent {
  @Input()
  descriptionTodoItem?: ItodoVsId;
}
