import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const authentcationInterceptor: HttpInterceptorFn = (req, next) => {
  const newRequest = req.clone({
    headers: new HttpHeaders({
      Authorization: 'access_token_from_interceptor',
    }),
  });
  return next(newRequest);
};
