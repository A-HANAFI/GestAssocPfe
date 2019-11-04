import { Injectable, OnInit } from '@angular/core';
import { Projet } from '../model/Projet';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjetService implements OnInit {

  projet: Projet;
  list : Projet[];
  constructor(private firestore : AngularFirestore) { }

  ngOnInit(){
     
  }

 addNewProjet(id,libelleProjet,descriptionProjet,dateDebut,dateFin, srcPhoto)
 {
   return this.firestore.doc('projets/'+ id).set({
    libelleProjet : libelleProjet,
    descriptionProjet: descriptionProjet,
    dateDebutProjet : dateDebut,
    dateFinProjet : dateFin,
    srcPhoto:srcPhoto
   })
 }
 getProjets(){
  return this.firestore.collection('projets').snapshotChanges();
}
 
}
