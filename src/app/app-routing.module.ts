import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoosComponent } from "src/app/todoos/todoos.component";
import { AddTodosComponent } from "src/app/todoos/add-todos/add-todos.component";

const routes: Routes = [{
  path: '', component: TodoosComponent
}, {
  path: 'add-form', component: AddTodosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
