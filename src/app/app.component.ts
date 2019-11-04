import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GestionAssociation';

  constructor(private userService : UserService
    ){}

  ngOnInit(){
    this.userService.getUsers().subscribe(
      actionArray =>{
        this.userService.list = actionArray.map(item => {
            return {
              id: item.payload.doc.id,
              ...item.payload.doc.data() 
          }as User;
        })
  });
  }
}
