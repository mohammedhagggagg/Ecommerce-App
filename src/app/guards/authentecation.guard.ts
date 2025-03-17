import { CanActivateFn } from '@angular/router';

export const authentecationGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('access_token')){
    return true;
}
else{
  alert("You are not authorized to view this page");
    return false;}
}
