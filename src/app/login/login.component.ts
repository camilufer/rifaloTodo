import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../services/data-db.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { Output } from '@angular/core';
import{ ServiceUserLogService} from '../service-user-log.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public contactForm: FormGroup;
  public estaLog: boolean = false;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  constructor(private dbData: DataDbService,
              private UserLogService: ServiceUserLogService) {
    this.contactForm = this.createFormGroup();
   }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get password() { return this.contactForm.get('password'); }

  createFormGroup(){
    return new FormGroup({
      email: new FormControl('',[Validators.required, Validators.minLength(100), Validators.pattern(this.emailPattern)]),
      name: new FormControl('',[Validators.required, Validators.minLength(100)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)])
    });
  }
  
 

  ngOnInit(): void {
    this.estaLog = false;
  }

  onResetForm(): void{
    this.contactForm.reset();
  }

  onSaveForm(): void{
    if(this.contactForm.valid){
      this.dbData.saveMessage(this.contactForm.value);
      this.onResetForm()
      console.log('valid');
    } else{
      console.log('not valid');
    }
    
  }

 agregarFavorito(){
   
   this.estaLog = true;
   console.log("hola");
   this.UserLogService.disparadorDeFavoritos.emit({
    data:this.estaLog
   })
 }

}
