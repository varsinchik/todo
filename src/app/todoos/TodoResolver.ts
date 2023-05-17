import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Itodo } from "src/app/todoos/todooModels";
import { Observable, of } from "rxjs";
import { TodooService } from "src/app/todoos/todooService";

@Injectable({ providedIn: "root" })
export class TodoResolver implements Resolve<Itodo | undefined> {
  constructor(private _todoServ: TodooService) {
  }
  resolve(route: ActivatedRouteSnapshot): Observable<Itodo | undefined> {
    const id = route.paramMap.get('id');
    return id ? this._todoServ.getDocument(id): of(undefined)
  }
}
