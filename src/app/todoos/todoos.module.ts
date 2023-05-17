import { NgModule } from "@angular/core";
import { TodoosComponent } from "src/app/todoos/todoos.component";
import { CommonModule } from "@angular/common";
import { TitleTodosComponent } from "src/app/todoos/title-todos/title-todos.component";
import { DescriptionTodosComponent } from "src/app/todoos/description-todos/description-todos.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddTodosComponent } from "src/app/todoos/add-todos/add-todos.component";
import { TodooService } from "src/app/todoos/todooService";
import { EditTodoComponent } from "src/app/todoos/edit-todo/edit-todo.component";
import { RouterOutlet } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  declarations: [
    TodoosComponent,
    TitleTodosComponent,
    DescriptionTodosComponent,
    AddTodosComponent,
    EditTodoComponent
  ],
  exports: [
    TodoosComponent,
    AddTodosComponent
  ],
  providers: [TodooService]
})
export class TodoosModule { }
