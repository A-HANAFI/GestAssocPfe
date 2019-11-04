import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjetComponent } from '../projets/projet/projet.component';
import { OrphelinComponent } from '../orphelins/orphelin/orphelin.component';




export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'gestionprojet',     component: ProjetComponent },
    {path:'about',component: AboutComponent},
    {path:'gestionorphelin', component: OrphelinComponent},
    {path:'contact', component: ContactComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];