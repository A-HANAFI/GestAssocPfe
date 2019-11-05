import { Component, OnInit } from '@angular/core';
import { OrphelinService } from 'src/app/services/orphelin.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { BenevoleService } from 'src/app/services/benevole.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { BenevoleLierComponent } from '../benevole-lier/benevole-lier.component';

@Component({
  selector: 'app-new-orphelin',
  templateUrl: './new-orphelin.component.html',
  styleUrls: ['./new-orphelin.component.scss']
})
export class NewOrphelinComponent implements OnInit {
  

  constructor( public orphelinService : OrphelinService,
    private firestore : AngularFirestore,
    public serviceBenevole : BenevoleService,
    public dialogRef: MatDialogRef<BenevoleLierComponent>,
    public dialog: MatDialog,
    ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.orphelinService.orphelin={
      idOrphelin:null,
      nom: "",
    prenom:"",
    tel:null,
    dateNaissance:null,
    age:null,
    montantPension:null,
    adresse:"",
    observation: "",

    }
  }

  onSubmit(form : NgForm){
    let data = Object.assign({},form.value) ;
    delete data.idOrphelin;
    if(form.value.idOrphelin == null)
    this.firestore.collection('orphelins').add(data);
    else
    this.firestore.doc('orphelins/'+form.value.idOrphelin).update(data);
    this.resetForm(form);
  }
  benevoleList(){
    this.dialog.open(BenevoleLierComponent, {width: '800px', height: '400px'});
  }
}
