import {NgModule} from "@angular/core";
import {TodoosComponent} from "./todoos.component";
import {CommonModule} from "@angular/common";
import {TitleTodosComponent} from "./title-todos/title-todos.component";
import {DescriptionTodosComponent} from "./description-todos/description-todos.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddTodosComponent } from './add-todos/add-todos.component';
import {TodooService} from "./todooService";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoosComponent,
    TitleTodosComponent,
    DescriptionTodosComponent,
    AddTodosComponent
  ],
  exports: [
    TodoosComponent,
    AddTodosComponent
  ],
  providers: [TodooService]
})
export class TodoosModule { }
