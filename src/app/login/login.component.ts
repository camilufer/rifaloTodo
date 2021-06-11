import { Component, OnInit } from '@angular/core';
import { DataDbService } from '../services/data-db.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  createFormGroup(){
    return new FormGroup({
      email: new FormControl(''),
      name: new FormControl(''),
      password: new FormControl('')
    });
  }
  contactForm: FormGroup;
  constructor(private dbData: DataDbService) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  onResetForm(){
    this.contactForm.reset();
  }

  onSaveForm(){
    console.log('Saved');
    const newContact= {
      name: 'cami',
      email:'camilu.fer21@gmail.com',
      password: '12345'
    }
    this.dbData.saveMessage(newContact);
    
  }

}
