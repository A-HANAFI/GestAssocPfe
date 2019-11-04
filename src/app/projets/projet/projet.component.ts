import { Component, OnInit } from '@angular/core';

import{PROJETS} from 'src/app/model/Projets';
import { Projet } from 'src/app/model/Projet';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  projets : Projet[] = PROJETS;
  

  constructor() { }

  ngOnInit() {
  }

}
