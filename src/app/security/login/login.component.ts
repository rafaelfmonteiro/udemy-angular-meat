import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import {LoginService} from './login.service'
import {User} from './user.model'
import {NotificationService} from '../../shared/messages/notification.service'

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationSerice : NotificationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('',[Validators.required, Validators.email ] ),
      password: this.fb.control('',[Validators.required])
    })
  }
  login(){
    this.loginService.login(this.loginForm.value.email,
      this.loginForm.value.password)
      .subscribe(user => this.notificationSerice.notify(`Bem vindo, ${user.name}`),
                response=>  this.notificationSerice.notify(response.error.message));
                // //HttpErrorResponse

                console.log('Logou: '+  this.loginService.user.accessToken );
  }
}
