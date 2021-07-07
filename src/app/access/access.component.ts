import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
  errorMessage = '';
  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private fb: FormBuilder,
    private ngZone: NgZone) { }

    loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    
  ngOnInit() {
 this.afAuth.user.subscribe(user => {
   if (user) {
     this.ngZone.run(() =>{
       this.router.navigate(['/home'])
     })
   }
  })
  }


  createUser(){
    this.afAuth.createUserWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(() => {
      this.router.navigate(['/singin']);
    }).catch((error) => {
      this.errorMessage = error.message;
    });
  }


  singIn(){
    this.afAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {
      this.errorMessage = error.message;
    })
  }
  

}
