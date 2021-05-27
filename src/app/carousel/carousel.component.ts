import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  peliculas:any[]=[
    { name:'',
      img:'./../../assets/img/imgSlider3.png',
    }, 
    {
      name:'The Irishman',
      img:'./../../assets/img/imgSlider4.jpg',
      desc:'Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.'
    }
  ];


  constructor(private _config:NgbCarouselConfig) { 
    _config.interval = 6000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;

  }

  ngOnInit(): void {
    
  }

}
