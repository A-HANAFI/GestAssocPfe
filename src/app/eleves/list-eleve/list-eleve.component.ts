import { Component, OnInit } from '@angular/core';
import { Eleve } from 'src/app/model/eleve';
import { EleveService } from 'src/app/services/eleve.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-list-eleve',
  templateUrl: './list-eleve.component.html',
  styleUrls: ['./list-eleve.component.scss']
})
export class ListEleveComponent implements OnInit {

  eleve : Eleve;
  list : Eleve[];
  constructor(private service: EleveService,
    private Firestore: AngularFirestore) { }

  ngOnInit() {
   this. listerEleve();
  }

  listerEleve(){
    this.service.getEleve().subscribe(
      actionArray =>{
        this.list = actionArray.map(item => {
            return {
              idEleve: item.payload.doc.id,
              ...item.payload.doc.data() 
          }as Eleve;
        })
  });}

  onEdit(eleve : Eleve){
    this.service.eleve =  Object.assign({},eleve) ;
  }

  onDelete(idEleve: string){
  
    if(confirm("Voulez vous supprimer ce record ??")){
      this.Firestore.doc('eleves/'+ idEleve).delete();
    }
  }

}
