import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from "src/app/todoos/todooModels";
import { ActivatedRoute } from "@angular/router";
import { of, switchMap } from "rxjs";
import { TodooService } from "src/app/todoos/todooService";

@Component({
  selector: 'app-description-todos',
  templateUrl: './description-todos.component.html',
  styleUrls: ['./description-todos.component.scss']
})
export class DescriptionTodosComponent implements OnInit {
  @Input()
  descriptionTodoItem?: Itodo;

  constructor(private _activeRoute: ActivatedRoute, private _todoServ: TodooService) {
  }

  ngOnInit() {
    this._activeRoute.paramMap.pipe(
      switchMap( res => {
        const id: string | null = res.get('id');
        return id ? this._todoServ.getDocument(id) : of(null);
      })
    ).subscribe(res => {
      if(res) {
        this.descriptionTodoItem = res
      }
    })
  }

}
