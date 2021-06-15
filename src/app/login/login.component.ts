import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { Output } from '@angular/core';
import{ ServiceUserLogService} from '../service-user-log.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public estaLog: boolean = false;

  createFormGroup(){
    return new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl('')
    });
  }
  contactForm: FormGroup;
  constructor(
    private dbData: DataDbService,
    private UserLogService: ServiceUserLogService
    ) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit(): void {
    this.estaLog = false;
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    console.log('Saved');
    this.dbData.saveMessage(this.contactForm.value);
    
  }

 agregarFavorito(){
   
   this.estaLog = true;
   console.log("hola");
   this.UserLogService.disparadorDeFavoritos.emit({
    data:this.estaLog
   })
 }

}
