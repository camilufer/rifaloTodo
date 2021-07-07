import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserLogService {
@Output() disparadorDeFavoritos: EventEmitter<any> = new EventEmitter();
  constructor() { }


 
}


