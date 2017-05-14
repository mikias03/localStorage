import { Injectable } from '@angular/core';

@Injectable()
export class MarkerService{

    setLocalStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    getLocalStorage(key){
        return JSON.parse(localStorage.getItem(key));
    }

    setSession(key, value){
      sessionStorage.setItem(key, value);
    }

    getSession(key) {
      return sessionStorage.getItem(key);
    }
}
