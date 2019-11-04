import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { firestore } from 'firebase';
import { FirebaseFirestore } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private userService : UserService,
    private firestore : AngularFirestore,
    public dialogRef: MatDialogRef<NewUserComponent>,
    private authService : AuthService,
    private router : Router
    ) { }

    errorMessage: string = '';

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
      profil: ""
      }
    }
  

    onSubmit(form : NgForm){
      let data: User = Object.assign({},form.value) ;
      this.authService.signup(data.email,data.password)
      .then(result=>{
        this.errorMessage='';
        this.userService.addNewUser(result.user.uid, data.nom, data.prenom, data.email, data.login, data.password, data.profil)
        .then(()=>{
          this.router.navigate(['/home']);
          
        if(confirm("vous avez anregistrer avec succes")){  
          this.dialogRef.close() ;  
      }
        });
      })
      .catch(err=>{
        this.errorMessage = err.message;
        console.log(err);
        form.invalid;
      }
        );

    }
}
