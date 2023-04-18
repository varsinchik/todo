import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {ItodoItems} from "./todooModels";
import {TodooService} from "./todooService";

@Component({
  selector: 'app-todoos',
  templateUrl: './todoos.component.html',
  styleUrls: ['./todoos.component.scss']
})
export class TodoosComponent {
  todoItem?: Observable<ItodoItems[]>
  inputselectedItemTodoo?: ItodoItems

  ids: any
  constructor(private collection: TodooService) {

    this.todoItem = this.collection.itemCollection.valueChanges()

    this.ids = this.collection.itemCollection.doc()
    console.log(this.ids)

  }
  sendDataFromForm(sendingData: ItodoItems) {
    this.collection.itemCollection.add(sendingData)
  }
  selectedItemTodoo(selectedItemTodoo: ItodoItems) {
    this.inputselectedItemTodoo = selectedItemTodoo
  }
}
