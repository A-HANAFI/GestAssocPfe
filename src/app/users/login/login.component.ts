import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { NewUserComponent } from '../new-user/new-user.component';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = User;
  errorMessage: string = '';
  profil: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
    private authService : AuthService,
    private userService:  UserService
    ) { }

  ngOnInit() {
  }
  
  openNewUserForm() {
    this.dialog.open(NewUserComponent, {width: '700px', height: '600px'});
  }
  onSubmit(form ? : NgForm){
    let data: User = Object.assign({},form.value) ;
    this.authService.login(data.email, data.password)
    .then(result =>
      {this.resetForm(),
      this.dialogRef.close()
      this.userService.getUsers().subscribe(data=>{
        
        
      })
    }
      
    ).catch(err=>{
      this.errorMessage = err.message;
        console.log(err);
        form.invalid;
    }
      
    );
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
      profil:""
      }
    }
    

  
}
