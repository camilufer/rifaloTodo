import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 @Output() isLogout = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
    
  }

  

  

}
