import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthProdDetInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'My Tokenn';

        const authReq = req.clone({ 
            setHeaders: {Authorization: token}
        });
        return next.handle(authReq);
    }
}

@Injectable()
export class AuthPhoneBookInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'My Token';

        const authReq = req.clone({ 
            setHeaders: {Authorization: token}
        });

        return next.handle(authReq);

    }
}