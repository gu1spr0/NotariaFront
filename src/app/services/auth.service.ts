import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfiguracionService } from './configuracion.service';
import { Signin } from '../models/user/Signin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;
  constructor(
    public http:HttpClient,
    private configuracion:ConfiguracionService,
    private router: Router
  ) { 
    this.url = configuracion.ServerWithApiUrl;
  }
  login(signin: Signin): Observable<any>{
    return this.http.post(this.url + 'login', signin).pipe(
      map((response: any) =>{
        if(response && response.token){
          localStorage.setItem('token', response.token);
        }
        return response;
      })
    );
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
