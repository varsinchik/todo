import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from "src/app/todoos/todooModels";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { TodooService } from "src/app/todoos/todooService";

@Component({
  selector: 'app-description-todos',
  templateUrl: './description-todos.component.html',
  styleUrls: ['./description-todos.component.scss']
})
export class DescriptionTodosComponent implements OnInit {
  @Input()
  descriptionTodoItem?: Itodo;

  showContent = new BehaviorSubject<boolean>(false);

  constructor(private _activeRoute: ActivatedRoute, private _todoServ: TodooService) {
  }

  ngOnInit() {
    this._activeRoute.data.subscribe(
      res => {
        this.showContent.next(false);
        this.descriptionTodoItem = res['resolvertodooitem'];
      })
  }

  show() {
    this.showContent.next(true);
  }

  hidden(event: boolean) {
    this.showContent.next(event);
  }
}
