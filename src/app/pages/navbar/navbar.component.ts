import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  role: 'admin' | 'user' | null = null;

  

  passwordInput = '';
  adminPassword: string | null = null;


  ngOnInit() {
    this.role = this.userService.getRole();
  }


  logout() {
    this.userService.logout();
    window.location.href = '/login';
  }

  openAdminModal() {
    this.router.navigate(['/administracion-votos']);
  }
 
  cerrarSesion() {
    this.router.navigate(['/login']);
  }

}
