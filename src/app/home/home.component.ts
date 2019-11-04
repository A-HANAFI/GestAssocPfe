import { Component, OnInit } from '@angular/core';
import{Comite} from'../model/Comite';
import{COMITES} from '../model/comites';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  comites: Comite[] = COMITES;
  constructor() { }

  ngOnInit() {
  }

}
