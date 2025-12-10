import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(private userService: UserService) {}

  async onRegister() {
    try {
      await this.userService.register(this.email, this.password, 'user'); // siempre 'user'
      this.successMessage = 'Usuario registrado correctamente';
      this.errorMessage = '';
    } catch (err: any) {
      this.errorMessage = err.message;
      this.successMessage = '';
    }
  }
}
