import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-rifa',
  templateUrl: './detalle-rifa.component.html',
  styleUrls: ['./detalle-rifa.component.scss']
})
export class DetalleRifaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle = true;
status = 'Enable'; 

enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
}
 
}
