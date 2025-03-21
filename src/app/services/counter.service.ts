import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  // create a private variable to store the value of the counter and initialize it with 0 in a behavior subject
private counter = new BehaviorSubject<number>(40); 
  constructor() { }
  // create a function to get the value of the counter
  getCounter(){
    return this.counter.asObservable(); // return the value of the counter
  }
  // create a function to increment the value of the counter
  setCounter(value: number){ 
    this.counter.next(value);
  }
}
