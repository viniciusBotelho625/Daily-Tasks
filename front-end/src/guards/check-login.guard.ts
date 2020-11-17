import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.islogged.pipe(
      take(1),
      map((islogged: boolean) => islogged)
    );
  }

}
