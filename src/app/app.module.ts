import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Router, Route} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FooterComponent } from './footer/footer.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DataDbService } from './services/data-db.service';
import { SinginComponent } from './singin/singin.component';
import { DetalleRifaComponent } from './detalle-rifa/detalle-rifa.component';



const appRoute:Route[]=[
  {
    path:'home',
    component:HomeComponent
    
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'preguntas',
    component:PreguntasComponent
  },
  {
    path:'singin',
    component:SinginComponent
  },
  {
    path:'detalle-rifa',
    component:DetalleRifaComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    NavbarComponent,
    CarouselComponent,
    CardComponent,
    DetalleComponent,
    FooterComponent,
    PreguntasComponent,
    SinginComponent,
    DetalleRifaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
