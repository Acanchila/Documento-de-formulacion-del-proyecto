import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private userService: UserService, private router: Router) {}

  login() {
  this.errorMessage = "";

  this.userService.login(this.email, this.password)
    .then(() => {
      console.log("Login exitoso");
      // Redirección opcional
      this.router.navigate(['/votar']);
    })
    .catch(err => {
      console.log(err.message);
      this.errorMessage = err.message;

      // 🔥 LIMPIAR FORMULARIO
      this.email = "";
      this.password = "";
    });
}

}


