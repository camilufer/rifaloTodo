import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rifalo-todo';
 
}
