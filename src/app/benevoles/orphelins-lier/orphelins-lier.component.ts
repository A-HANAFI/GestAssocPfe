import { Component, OnInit } from '@angular/core';
import { Benevole } from 'src/app/model/Benevole';
import { Orphelin } from 'src/app/model/orphelin';
import { BenevoleService } from 'src/app/services/benevole.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { OrphelinService } from 'src/app/services/orphelin.service';

@Component({
  selector: 'app-orphelins-lier',
  templateUrl: './orphelins-lier.component.html',
  styleUrls: ['./orphelins-lier.component.scss']
})
export class OrphelinsLierComponent implements OnInit {


  benevole : Benevole;
  list : Benevole[];
  listOrphelin : Orphelin[];
  orphelins : Orphelin[];

  

  constructor(
    private Firestore: AngularFirestore,
    private orphelinService: OrphelinService,
    private benevoleService: BenevoleService
    ) { }

    idBenevole = this.benevoleService.benevole.idBenevole
  ngOnInit() {
    this.listerOrphelinLier(this.idBenevole);
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
  
  onEdit(orphelin : Orphelin){
    
    this.orphelinService.orphelinLier =  Object.assign({},orphelin) ;
  }

  onDelete(idBenevole:string,  idOrphelin: string){
  
    if(confirm("Voulez vous supprimer ce record ??")){
      this.Firestore.doc('benevoles/'+ this.benevoleService.benevole.idBenevole + '/orphelins/'+ idOrphelin).delete();
    }
  }
}
