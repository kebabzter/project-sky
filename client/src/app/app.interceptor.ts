import { Injectable, Provider } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from "rxjs";
import { Token } from "@angular/compiler";

const HEADER_AUTH = 'X-Authorization'
@Injectable()
export class AppInterceptor implements HttpInterceptor {
    token: string | null  = localStorage.getItem('token'); 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token')
        if(token != null){
            return next.handle(req.clone({headers: req.headers.set(HEADER_AUTH, token)}));
        }
            return next.handle(req.clone())
    }

}
export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  };