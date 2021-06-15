import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  imagenes:any[]=[
    { name:'',
      img:'./assets/img/imgSlider3.png',
    }, 
    {
      name:'',
      img:'./assets/img/imgSlider4.jpg',
      desc:''
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
