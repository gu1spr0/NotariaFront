import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = localStorage.getItem('token');
        let data = request;
        if (token) {
            data = request.clone({
                setHeaders: {
                    authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(data).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 404) {
                    this.router.navigate(['/login']);
                }
                return throwError(err);
            })
        );
    }
}
