import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { ItodoVsId } from "src/app/todoos/todooModels";
import { TodooService } from "src/app/todoos/todooService";
import { Router } from "@angular/router";

@Component({
  selector: 'app-todoos',
  templateUrl: './todoos.component.html',
  styleUrls: ['./todoos.component.scss']
})
export class TodoosComponent {
  todoItem?: Observable<ItodoVsId[]>;

  inputselectedItemTodoo?: ItodoVsId;

  constructor(
    private collection: TodooService,
    private _router: Router) {
    this.todoItem = this.collection.itemCollectionVsId;
  }

  selectedItemTodoo(selectedItemTodoo: ItodoVsId) {
    this.inputselectedItemTodoo = selectedItemTodoo;
    this._router.navigate(['', selectedItemTodoo.id]);
  }

  navAddForm() {
    this._router.navigate(['add-form']);
  }
}
