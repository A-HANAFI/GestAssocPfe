import { Injectable } from '@angular/core';
import { Orphelin } from '../model/orphelin';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrphelinService {

  orphelin: Orphelin;
  orphelinLier : Orphelin;


  constructor(private firestore : AngularFirestore) { }

  getOrphelins(){
    return this.firestore.collection('orphelins').snapshotChanges();
  }

  getOrphelinByBenevole(idBenevole : string){
    return this.firestore.collection('benevoles/'+ idBenevole +'/orphelins').snapshotChanges();
  }
}
