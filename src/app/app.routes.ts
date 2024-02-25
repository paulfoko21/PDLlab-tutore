import { AdminLoginComponent } from './Dashboard/pages/admin-login/admin-login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './Users/pages/home/home.component';
import { HistoriqueComponent } from './Users/pages/historique/historique.component';
import { AudioComponent } from './Users/pages/audio/audio.component';
import { BookComponent } from './Users/pages/book/book.component';
import { EmpruntsComponent } from './Users/pages/emprunts/emprunts.component';
import { AutresComponent } from './Users/pages/autres/autres.component';
import { AdminHomeComponent } from './Dashboard/pages/admin-home/admin-home.component';
import { LogincardComponent } from './Users/components/logincard/logincard.component';
import { SingupcardComponent } from './Users/components/singupcard/singupcard.component';
import { AccueilComponent } from './Dashboard/pages/accueil/accueil.component';
import { AccueilComponent as AccueilUser } from './Users/pages/accueil/accueil.component';
import { DocumentsComponent } from './Dashboard/pages/infos/documents/documents.component';
import { DocumentsComponent as Doc } from './Dashboard/pages/gestion/documents/documents.component';
import { DonsComponent } from './Dashboard/pages/infos/dons/dons.component';
import { DonsComponent as Dons } from './Dashboard/pages/gestion/dons/dons.component';
import { VentesComponent } from './Dashboard/pages/infos/ventes/ventes.component';
import { UsersComponent } from './Dashboard/pages/gestion/users/users.component';
import { ViewLivreComponent } from './Users/pages/view-livre/view-livre.component';

export const routes: Routes = [
    {'path': '', component:HomeComponent, 
        children: [
            {path: 'Accueil', component:AccueilUser},
            {path: 'Historique', component:HistoriqueComponent},
            {path: 'Emprunts_en_cours', component:EmpruntsComponent},
            {path: 'Book', component:BookComponent},
            {path: 'Audio', component:AudioComponent},
            {path: 'Autres', component:AutresComponent},
            {path: 'View_detail', component:ViewLivreComponent}
        ],
    },
    {'path': 'login', component:LogincardComponent},
    {'path': 'signup', component:SingupcardComponent},
    {
        'path': 'admin', 
        component:AdminHomeComponent,
        children: [
            {path: '', component:AccueilComponent},
            {path: 'infos/Documents', component:DocumentsComponent},
            {path: 'infos/Dons', component:DonsComponent},
            {path: 'infos/Emprunts', component: EmpruntsComponent},
            {path: 'infos/Ventes', component: VentesComponent},
            {path: 'ges/Documents', component: Doc},
            {path: 'ges/Dons', component: Dons},
            {path: 'ges/utilisateurs', component: UsersComponent},
            {path: 'login', component:AdminLoginComponent}
        ],
    }
];
