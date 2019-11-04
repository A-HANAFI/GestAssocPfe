import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { HeaderComponent } from '@src/app/header/header.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from '@src/app/footer/footer.component';
import { AboutComponent } from '@src/app/about/about.component';
import { HomeComponent } from '@src/app/home/home.component';
import { ContactComponent } from '@src/app/contact/contact.component';


import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import{ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { Routes, RouterModule } from '@angular/router';
import { User } from '@src/app/model/User';

import{HttpClientModule} from '@angular/common/http';
import { NewOrphelinComponent } from '@src/app/orphelins/new-orphelin/new-orphelin.component';
import { ListOrphelinComponent } from '@src/app/orphelins/list-orphelin/list-orphelin.component';
import { NewProjetComponent } from '@src/app/projets/new-projet/new-projet.component';
import { ListProjetComponent } from '@src/app/projets/list-projet/list-projet.component';

import{AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ProjetComponent } from '@src/app/projets/projet/projet.component';
import { LoginComponent } from '@src/app/users/login/login.component';
import { NewUserComponent } from '@src/app/users/new-user/new-user.component';
import { OrphelinComponent } from '@src/app/orphelins/orphelin/orphelin.component';
import { OrphelinsComponent } from '@src/app/orphelins/orphelins/orphelins.component';
import { OrphelinService } from '@src/app/services/orphelin.service';
import { ProjetService } from '@src/app/services/projet.service';
import { UserService } from '@src/app/services/user.service';
import { UsersListComponent } from '@src/app/users/users-list/users-list.component';
import { UsersComponent } from '@src/app/users/users/users.component';
import { AddUserComponent } from '@src/app/users/add-user/add-user.component';
import { ProfilComponent } from '@src/app/profils/profil/profil.component';
import { NewProfilComponent } from '@src/app/profils/new-profil/new-profil.component';
import { ListProfilComponent } from '@src/app/profils/list-profil/list-profil.component';
import { PrivilegeComponent } from '@src/app/privileges/privilege/privilege.component';
import { NewPrivilegeComponent } from '@src/app/privileges/new-privilege/new-privilege.component';
import { ListPrivilegeComponent } from '@src/app/privileges/list-privilege/list-privilege.component';
import { ProfilsComponent } from '@src/app/profils/profils/profils.component';
import { PrivilegeService } from '@src/app/services/privilege.service';
import { ProfilService } from '@src/app/services/profil.service';
import { ProjetsComponent } from '@src/app/projets/projets/projets.component';
import { BenevolesComponent } from '@src/app/benevoles/benevoles/benevoles.component';
import { AddBenevoleComponent } from '@src/app/benevoles/add-benevole/add-benevole.component';
import { ListBenevoleComponent } from '@src/app/benevoles/list-benevole/list-benevole.component';
import { OrphelinsLierComponent } from '@src/app/benevoles/orphelins-lier/orphelins-lier.component';

import {AngularFireAuthModule} from '@angular/fire/auth';
import { AddCoursComponent } from '@src/app/cours/add-cours/add-cours.component';
import { ListCoursComponent } from '@src/app/cours/list-cours/list-cours.component';
import { AddEleveComponent } from '@src/app/eleves/add-eleve/add-eleve.component';
import { ListEleveComponent } from '@src/app/eleves/list-eleve/list-eleve.component';
import { ElevesComponent } from '@src/app/eleves/eleves/eleves.component';
import { AddEvenementComponent } from '@src/app/evenements/add-evenement/add-evenement.component';
import { ListEvenementComponent } from '@src/app/evenements/list-evenement/list-evenement.component';
import { EvenementsComponent } from '@src/app/evenements/evenements/evenements.component';
import { CoursComponent } from '@src/app/cours/cours/cours.component';
import { AddOrphelinComponent } from '@src/app/benevoles/add-orphelin/add-orphelin.component';
import { BenevoleLierComponent } from '@src/app/orphelins/benevole-lier/benevole-lier.component';
import { Error404ComponentComponent } from '@src/app/error404-component/error404-component.component';
import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  {path:'gestionusers', component: UsersComponent },
  {path:'gestionbenevoles', component: BenevolesComponent},
  { path: 'gestionprojet',     component: ProjetsComponent },
  {path:'gestionevenement', component:EvenementsComponent},
  {path:'about',component: AboutComponent},
  {path:'gestionorphelin', component: OrphelinsComponent},
  {path:'contact', component: ContactComponent},
  {path:'new-user', component: NewUserComponent},
  {path:'gestioneleve', component: ElevesComponent},
  {path:'gestioncours', component:CoursComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '404', component: Error404ComponentComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [
    Error404ComponentComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ProjetComponent,
    LoginComponent,
    NewUserComponent,
    OrphelinComponent,
    NewOrphelinComponent,
    ListOrphelinComponent,
    NewProjetComponent,
    ListProjetComponent,
    OrphelinsComponent,
    UsersListComponent,
    UsersComponent,
    AddUserComponent,
    ProfilComponent,
    NewProfilComponent,
    ListProfilComponent,
    PrivilegeComponent,
    NewPrivilegeComponent,
    ListPrivilegeComponent,
    ProfilsComponent,
    ProjetsComponent,
    BenevolesComponent,
    AddBenevoleComponent,
    ListBenevoleComponent,
    OrphelinsLierComponent,
    AddCoursComponent,
    ListCoursComponent,
    AddEleveComponent,
    ListEleveComponent,
    ElevesComponent,
    AddEvenementComponent,
    ListEvenementComponent,
    EvenementsComponent,
    CoursComponent,
    AddOrphelinComponent,
    BenevoleLierComponent,
    AutoGeneratedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  
  entryComponents:[
    LoginComponent,
    AddUserComponent,
    ProfilsComponent,
    ListOrphelinComponent,
    BenevoleLierComponent,
    OrphelinsLierComponent,
    AddOrphelinComponent  
  ],  
  providers: [
    OrphelinService,
    ProjetService,
    UserService,
    PrivilegeService,
    ProfilService,
    { provide: MatDialogRef, useValue: {} },
{ provide: MAT_DIALOG_DATA, useValue: [] },
  {provide: FirestoreSettingsToken, useValue:{}}    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
