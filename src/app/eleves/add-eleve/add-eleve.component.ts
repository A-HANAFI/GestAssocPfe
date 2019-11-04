import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material';
import { EleveService } from 'src/app/services/eleve.service';

@Component({
  selector: 'app-add-eleve',
  templateUrl: './add-eleve.component.html',
  styleUrls: ['./add-eleve.component.scss']
})
export class AddEleveComponent implements OnInit {

  constructor(private firestore : AngularFirestore,
    
    public dialog: MatDialog,
    private eleveService : EleveService,) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.eleveService.eleve={
      idEleve:null,
      nom: "",
    prenom:"",
    email:"",
    login:"",
    password:"",
    confPassword:"",
    }
  }


  onSubmit(form : NgForm){
    let data = Object.assign({},form.value) ;
    delete data.id;
    if(form.value.id == null)
    this.firestore.collection('eleves').add(data);
    else
    this.firestore.doc('eleves/'+form.value.id).update(data);
    this.resetForm(form);
    
  }

}
