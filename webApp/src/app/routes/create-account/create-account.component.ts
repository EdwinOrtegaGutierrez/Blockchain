import { Component } from '@angular/core';
import { WebapiService } from '../../service/api/webapi.service';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {
  constructor(public api:WebapiService){}

  createUser(name: string, age: string, email: string, password: string, cPassword: string) {
    const isEmail = /@/.test(email);
  
    let body = {
      "name": name,
      "age": age,
      "username": isEmail ? "" : email,
      "email": isEmail ? email : "",
      "password": password
    };
    if (password == cPassword){
        this.api.createUser(body).subscribe(
          r => {
            alert(r);
          },
          error => {
            console.error('Error al crear usuario:', error);
          }
        );
      } else {
        alert("Error")
      }
  }
}
