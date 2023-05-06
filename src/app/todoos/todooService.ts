import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Itodo, ItodoVsId } from "src/app/todoos/todooModels";
import { map, Observable } from "rxjs";

@Injectable()
export class TodooService {
  itemCollection: AngularFirestoreCollection<Itodo>;
  item?: AngularFirestoreDocument<Itodo>;

  itemCollectionVsId?: Observable<ItodoVsId[]>;

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
  };

  getDocument(id: string) {
    this.item = this._afs.collection('666').doc(id);
    return this.item.valueChanges();
  };
  addItemInCollection(sendingData: Itodo) {
    this.itemCollection.add(sendingData);
  }

}
