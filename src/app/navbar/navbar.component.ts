import { Component, OnInit, Output } from '@angular/core';
import{ ServiceUserLogService} from '../service-user-log.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showNavbar: boolean = true ;
  
  public isCollapsed = true;

  constructor( private UserLogService: ServiceUserLogService) { }

  ngOnInit(): void {
   
    this.UserLogService.disparadorDeFavoritos.subscribe(data =>{
      this.showNavbar = !this.showNavbar;
      console.log('recibiendo data', data);
    } )

   
  }

  

 




 

}
