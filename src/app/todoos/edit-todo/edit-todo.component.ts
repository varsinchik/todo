import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TodooService } from "src/app/todoos/todooService";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  @Output()
  outHidden: EventEmitter<boolean> = new EventEmitter();
  item?: any;
  constructor(private _activRoute: ActivatedRoute, private _todoServ: TodooService) {


  }

  ngOnInit() {
    this._activRoute.paramMap.subscribe( res => {
      const id: string | null = res.get('id');
      if(id) {
        console.log(id);
        this.item = this._todoServ.getDocument(id);
      }
    } )
  }

  hidden() {
    this.outHidden.emit(false)
  }
}
