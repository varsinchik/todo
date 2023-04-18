import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Itodo, ItodoVsId } from "src/app/todoos/todooModels";
import { TodooService } from "src/app/todoos/todooService";

@Component({
  selector: 'app-todoos',
  templateUrl: './todoos.component.html',
  styleUrls: ['./todoos.component.scss']
})
export class TodoosComponent {
  todoItem?: Observable<ItodoVsId[]>;

  inputselectedItemTodoo?: ItodoVsId;

  constructor(private collection: TodooService) {
    this.todoItem = this.collection.itemCollectionVsId;
  }

  sendDataFromForm(sendingData: Itodo) {
    this.collection.itemCollection.add(sendingData);
  }

  selectedItemTodoo(selectedItemTodoo: ItodoVsId) {
    this.inputselectedItemTodoo = selectedItemTodoo;
  }
}
