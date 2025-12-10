import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role = this.userService.getRole();

    // Si no hay usuario logueado, redirige al login
    if (!role) {
      this.router.navigate(['/login']);
      return false;
    }

    // Rutas que permiten solo ciertos roles
    const allowedRoles = route.data?.roles as Array<string>;
    if (allowedRoles && !allowedRoles.includes(role)) {
      // Redirigir si no tiene permiso
      this.router.navigate(['/perfil']);
      return false;
    }

    return true; // Usuario permitido
  }
  
}
