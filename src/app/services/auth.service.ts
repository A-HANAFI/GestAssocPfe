import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import{auth} from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user : Observable<firebase.User>;

  userId : string= '';

  userAuth: Observable<User>;

  constructor(private angularFireAuth: AngularFireAuth,
    private angularFireStore : AngularFirestore) { 
    this.user = angularFireAuth.user;
  }


  signup(email, password){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  getUserById(id){
    return this.angularFireAuth.auth;
  }

  login(email, password){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email ,password);
  }


  logout(){
    return this.angularFireAuth.auth.signOut();
  }

}
