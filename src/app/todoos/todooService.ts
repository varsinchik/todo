import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Itodo, ItodoVsId } from "src/app/todoos/todooModels";
import { map, Observable } from "rxjs";

@Injectable()
export class TodooService {
  itemCollection: AngularFirestoreCollection<Itodo>

  itemCollectionVsId?: Observable<ItodoVsId[]>

  constructor(private _afs: AngularFirestore) {
    this.itemCollection = this._afs.collection<Itodo>('666');
    this.itemCollectionVsId = this.itemCollection.snapshotChanges().pipe(
      map(response => response.map(
        obj => {
          const data = obj.payload.doc.data() as Itodo;
          const id = obj.payload.doc.id;
          return { id, data }
        }
      ))
    );
  }
}
