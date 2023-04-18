import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {ItodoItems} from "./todooModels";

@Injectable()
export class TodooService {

  itemCollection: AngularFirestoreCollection<any>
  constructor(private _afs: AngularFirestore) {
    this.itemCollection = this._afs.collection<ItodoItems[]>('666')
  }

}
