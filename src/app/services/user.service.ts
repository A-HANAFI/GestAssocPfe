import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/User';
import{HttpClient} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  constructor(private httpClient : HttpClient,
    private firestore : AngularFirestore
    ) { }

   user : User;
   public list : User[]  = [];

   ngOnInit(){
      this.getUsers().subscribe(
      actionArray =>{
        this.list = actionArray.map(item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data() 
          }as User;
        })
  });

  
   }

  addNewUser(id, nom, prenom, email, login, password,profil)
  {
    return this.firestore.doc('users/'+ id).set({
      nom:nom,
      prenom:prenom,
      email:email,
      login:login,
      password:password,
      profil:profil
    })
  }

  getUsers(){
    return this.firestore.collection('users').snapshotChanges();
  }
  
  getUserById(id: string){
    
    return this.firestore.doc('users/'+ id).valueChanges();
  }
}
