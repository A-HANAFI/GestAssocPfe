import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../users/login/login.component';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router';
import { User } from '../model/User';
import { Observable } from 'rxjs';
import { BenevoleService } from '../services/benevole.service';
import { element } from 'protractor';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isOpen: boolean = false;
  isUser: boolean = false;
  user : User;
  profil : string ;
  userObservable : Observable<User>;
  userId : string;
  list: User[] ;
  

  constructor(public dialog: MatDialog,
    private authService : AuthService,
    private userService : UserService,
    private router : Router,
    private benevoleService: BenevoleService
    ) { }


  ngOnInit() {
    
    this.profil = localStorage.getItem("profil");

    this.userService.getUsers().subscribe(
      actionArray =>{
        this.userService.list = actionArray.map(item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data() 
          }as User;
        })
  });
  
    this.authService.user.subscribe(user=>{
      if(user) {
        
        this.isUser = true;
        
        this.authService.userId = user.uid;
        
        this.userService.list.forEach(element => {
          if(element.email == user.email){
            this.user = user;
            this.profil = element.profil;
            localStorage.setItem('profil', this.profil);        
            
          }
        });
 
      }
      else {
        
        this.isUser = false;
        
        this.authService.userId = '';
        this.profil="";
        
      }
        })

        
      }
    
 

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '650px', height: '500px'});
  }

  logOut(){
    this.profil=""
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  test(){
    console.log("profil "+ this.profil+  "-- logged In " + this.isUser ) ;

    console.log("7"+this.isUser);
  }

  ngOnDestroy(){
    
  }
}
