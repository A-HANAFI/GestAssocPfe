import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/services/projet.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Projet } from 'src/app/model/Projet';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.scss']
})
export class ListProjetComponent implements OnInit {

  list : Projet[];
  
  constructor(private service: ProjetService,
    private Firestore: AngularFirestore,) { }

  ngOnInit() {
    this.listerProjet();
  }

  listerProjet(){
    this.service.getProjets().subscribe(
      actionArray =>{
        this.list = actionArray.map(item => {
            return {
              idProjet: item.payload.doc.id,
              ...item.payload.doc.data() 
          }as Projet;
        })
  });}

  onEdit(projet : Projet){
    this.service.projet =  Object.assign({},projet) ;
  }

  onDelete(id: string){
  
    if(confirm("Voulez vous supprimer ce record ??")){
      this.Firestore.doc('projets/'+ id).delete();
      this.service.list[id].delete();
    }
  }
}
