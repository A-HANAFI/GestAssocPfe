import { Component, OnInit } from '@angular/core';
import { BenevoleService } from 'src/app/services/benevole.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Benevole } from 'src/app/model/Benevole';

@Component({
  selector: 'app-benevole-lier',
  templateUrl: './benevole-lier.component.html',
  styleUrls: ['./benevole-lier.component.scss']
})
export class BenevoleLierComponent implements OnInit {

  

  constructor(public benevoleService: BenevoleService,
    private Firestore: AngularFirestore) { }

    benevole : Benevole;
    list : Benevole[];
    checkbox : boolean;
    

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
  }

  onDelete(idBenevole: string){
  
    if(confirm("Voulez vous supprimer ce record ??")){
      this.Firestore.doc('benevoles/'+ idBenevole).delete();
    }
  }

  checkValue(event: any){
    console.log(this.checkbox);
 }

 
}
