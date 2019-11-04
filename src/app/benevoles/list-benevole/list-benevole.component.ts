import { Component, OnInit } from '@angular/core';
import { Benevole } from 'src/app/model/Benevole';
import { BenevoleService } from 'src/app/services/benevole.service';
import { UserService } from 'src/app/services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Orphelin } from 'src/app/model/orphelin';

@Component({
  selector: 'app-list-benevole',
  templateUrl: './list-benevole.component.html',
  styleUrls: ['./list-benevole.component.scss']
})
export class ListBenevoleComponent implements OnInit {

  benevole : Benevole;
  list : Benevole[];
  public listOrphelin : Orphelin[];

  constructor(private benevoleService: BenevoleService,
    private Firestore: AngularFirestore) { }

  ngOnInit() {
    this.listerBenevole();
  }

  listerBenevole(){
    this.benevoleService.getBenevole().subscribe(
      actionArray =>{
        this.list = actionArray.map(item => {
            return {
              idBenevole: item.payload.doc.id,
              ...item.payload.doc.data() 
          }as Benevole;
        })
  });}

  onEdit(benevole : Benevole){
    this.benevoleService.benevole =  Object.assign({},benevole) ;
    this.listerOrphelinLier(benevole.idBenevole);
  }

  listerOrphelinLier(idBenevole : string){
    this.benevoleService.getOrphelinsLier(idBenevole).subscribe(
      actionArray =>{
        this.listOrphelin = actionArray.map(item => {
            return {
              idOrphelin: item.payload.doc.id,
              ...item.payload.doc.data() 
          }as Orphelin;
        })
  });}
  onDelete(idBenevole: string){
  
    if(confirm("Voulez vous supprimer ce record ??")){
      this.Firestore.doc('benevoles/'+ idBenevole).delete();
    }
  }

}
