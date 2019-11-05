import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef, MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';

import { ProfilsComponent } from 'src/app/profils/profils/profils.component';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import{User } from '../../model/User';
import {profils}from '../../model/profils';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(public userService : UserService,
    private firestore : AngularFirestore,
    public dialogRef: MatDialogRef<AddUserComponent>,
    public dialog: MatDialog,
    public authService : AuthService,
    private router : Router) { }

    errorMessage: string = '';
    profils =profils;

    ngOnInit() {
      this.resetForm();
    }
  
    resetForm(form? : NgForm){
      if(form != null)
      form.resetForm();
      this.userService.user={
        idUser:null,
        nom: "",
        prenom:"",
        email:"",
        login:"",
        password:"",
        confPassword:"",
        profil: "",
      }
    }
  

    onSubmit(form : NgForm){
     
      let data: User = Object.assign({},form.value) ;
      this.authService.signup(data.email,data.password)
      .then(result=>{
        this.errorMessage='';
        this.userService.addNewUser(result.user.uid, data.nom, data.prenom, data.email, data.login, data.password, data.profil);
        
      })
      .catch(err=>{
        this.errorMessage = err.message;
        console.log(err);
        form.invalid;
      }
        );
        if(confirm("voulez vous ajouter cet utilisateur ?"))
        {this.resetForm(form);}
        
        
    }
    

    openNewProfilForm(){
      this.dialog.open(ProfilsComponent, {width: '900px', height: '900px'});
    }
}
