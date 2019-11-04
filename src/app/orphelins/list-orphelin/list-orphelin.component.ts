import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrphelinService } from 'src/app/services/orphelin.service';
import { Orphelin } from 'src/app/model/orphelin';
import { OrphelinsComponent } from '../orphelins/orphelins.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-orphelin',
  templateUrl: './list-orphelin.component.html',
  styleUrls: ['./list-orphelin.component.scss']
})
export class ListOrphelinComponent implements OnInit, OnDestroy {

  list : Orphelin[];
  orphelinObservable: Subscription;
  
  constructor( private service: OrphelinService,
    private Firestore: AngularFirestore,
    ) { }

  ngOnInit() {
    this.listerOrphelin();
  }

  listerOrphelin(){
  this.orphelinObservable= this.service.getOrphelins().subscribe(
    actionArray =>{
      this.list = actionArray.map(item => {
          return {
            idOrphelin: item.payload.doc.id,
            ...item.payload.doc.data() 
        }as Orphelin;
      })
});}

onEdit(orphelin : Orphelin){
  this.service.orphelin =  Object.assign({},orphelin) ;
}

onDelete(idOrphelin: string){
  
  if(confirm("Voulez vous supprimer ce record ??")){
    this.Firestore.doc('orphelins/'+ idOrphelin).delete();
  }
}

onSearch(){
  
}
ngOnDestroy(){
  this.orphelinObservable.unsubscribe();
}
}