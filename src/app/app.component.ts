import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Output, OnInit } from '@angular/core';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rifalo-todo';
 isSingedIn = false;
 constructor(){}
   

}