import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  public loginForm!:FormGroup;

  constructor(private _auth : AuthService, private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onLogin(): void{
    const loginInfo = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
    this._auth.login(loginInfo).subscribe({
      next: (res: any)=>{
        localStorage.setItem('token', res.token);
        console.log(res);
      }
    });
    console.log(loginInfo);
  }

}
