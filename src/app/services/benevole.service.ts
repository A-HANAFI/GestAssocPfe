import { Injectable } from '@angular/core';
import { Benevole } from '../model/Benevole';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BenevoleService {

  benevole : Benevole;
  constructor(private firestore : AngularFirestore) { }

  getBenevole(){
    return this.firestore.collection('benevoles').snapshotChanges();
  }

  getOrphelinsLier(idBenevole : string){

    return this.firestore.collection('benevoles').doc(idBenevole)
    .collection('orphelins').snapshotChanges();
  }

  
}
