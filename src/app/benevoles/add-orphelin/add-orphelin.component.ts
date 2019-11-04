import { Component, OnInit } from '@angular/core';
import { Orphelin } from 'src/app/model/orphelin';
import { Subscription } from 'rxjs';
import { OrphelinService } from 'src/app/services/orphelin.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BenevoleService } from 'src/app/services/benevole.service';

@Component({
  selector: 'app-add-orphelin',
  templateUrl: './add-orphelin.component.html',
  styleUrls: ['./add-orphelin.component.scss']
})
export class AddOrphelinComponent implements OnInit {


  list : Orphelin[];
  orphelinObservable: Subscription;
  idBenevole  = this.benevoleService.benevole.idBenevole;

  constructor( private orphelinService: OrphelinService,
    private benevoleService: BenevoleService,
    private Firestore: AngularFirestore,
    ) { }

  ngOnInit() {
    this.listerOrphelin();
  }

  listerOrphelin(){
  this.orphelinObservable= this.orphelinService.getOrphelins().subscribe(
    actionArray =>{
      this.list = actionArray.map(item => {
          return {
            idOrphelin: item.payload.doc.id,
            ...item.payload.doc.data() 
        }as Orphelin;
      })
});}


onDelete(idOrphelin : string) {
  
  if(confirm("Voulez vous supprimer ce record ??")){
    this.Firestore.doc('/orphelins'+idOrphelin).delete();
  }
}

onSearch(){
    
}

ngOnDestroy(){
  this.orphelinObservable.unsubscribe();
}

onEdit(orphelin : Orphelin){
  this.orphelinService.orphelin =  Object.assign({},orphelin) ;
}


}
