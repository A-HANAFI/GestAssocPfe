import { Component, OnInit } from '@angular/core';
import { BenevoleService } from 'src/app/services/benevole.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ListOrphelinComponent } from 'src/app/orphelins/list-orphelin/list-orphelin.component';
import { OrphelinsLierComponent } from '../orphelins-lier/orphelins-lier.component';
import { AddOrphelinComponent } from '../add-orphelin/add-orphelin.component';

@Component({
  selector: 'app-add-benevole',
  templateUrl: './add-benevole.component.html',
  styleUrls: ['./add-benevole.component.scss']
})
export class AddBenevoleComponent implements OnInit {

  constructor(private firestore : AngularFirestore,
    public dialogRef: MatDialogRef<AddBenevoleComponent>,
    public dialog: MatDialog,
    private benevoleService : BenevoleService,
    ) { }

  ngOnInit() {
    this.resetForm();
  }

  

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.benevoleService.benevole={
      idBenevole:null,
      nom: "",
    prenom:"",
    email:"",
    login:"",
    password:"",
    confPassword:"",
    lstOrphelin:null
    }
  }


  onSubmit(form : NgForm){
    let data = Object.assign({},form.value) ;
    delete data.idBenevole;
    if(form.value.idBenevole == null)
    this.firestore.collection('benevoles').add(data);
    else
    this.firestore.doc('benevoles/'+form.value.idBenevole).update(data);
    this.resetForm(form);
    
  }

  openOrphelinList(){
    this.dialog.open(OrphelinsLierComponent, {width: '1000px', height: '500px'});
  }

  openAddOrphelin() {
    this.dialog.open(  AddOrphelinComponent, {width: '1000px', height: '500px'})
  }
}
