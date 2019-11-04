import { Injectable } from '@angular/core';
import { Eleve } from '../model/eleve';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  eleve : Eleve;
  
  constructor(private firestore : AngularFirestore) { }

  getEleve(){
    return this.firestore.collection('eleves').snapshotChanges();
  }
}
