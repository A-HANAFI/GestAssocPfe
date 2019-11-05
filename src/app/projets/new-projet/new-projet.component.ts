import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-projet',
  templateUrl: './new-projet.component.html',
  styleUrls: ['./new-projet.component.scss']
})
export class NewProjetComponent implements OnInit {

  constructor(public projetService : ProjetService,
    private firestore : AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.projetService.projet={
      idProjet:null,
      libelleProjet: "",
      descriptionProjet:"",
      dateDebutProjet:null,
      dateFinProjet:null,
      srcPhoto:""
    }
  }

  onSubmit(form : NgForm){
    let data = Object.assign({},form.value) ;
    delete data.id;
    if(form.value.id == null)
    this.firestore.collection('projets').add(data);
    else
    this.firestore.doc('projets/'+form.value.id).update(data);
    this.resetForm(form);
  }
}
