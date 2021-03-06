import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  list : User[];

  constructor(
    private Firestore: AngularFirestore,
    public userService : UserService) { }

  ngOnInit() {
    this.listerUser();
  }

  listerUser(){
    this.userService.getUsers().subscribe(
      actionArray =>{
        this.userService.list = actionArray.map(item => {
            return {
              idUser: item.payload.doc.id,
              ...item.payload.doc.data() 
          }as User;
        })
  });}

  onEdit(user : User){
    this.userService.user =  Object.assign({},user) ;
  }

  onDelete(id: string){
  
    if(confirm("Voulez vous supprimer ce record ??")){
      this.Firestore.doc('users/'+ id).delete();
      
    }
  }

}
