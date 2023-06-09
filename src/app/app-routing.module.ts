import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoosComponent } from "src/app/todoos/todoos.component";
import { AddTodosComponent } from "src/app/todoos/add-todos/add-todos.component";
import { DescriptionTodosComponent } from "src/app/todoos/description-todos/description-todos.component";
import { TodoResolver } from "src/app/todoos/TodoResolver";

const routes: Routes = [{
  path: '', component: TodoosComponent, children: [{
    path: ':id', component: DescriptionTodosComponent, resolve: { resolvertodooitem: TodoResolver }
  }]
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
