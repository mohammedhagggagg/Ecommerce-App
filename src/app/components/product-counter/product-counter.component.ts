import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-product-counter',
  imports: [],
  templateUrl: './product-counter.component.html',
  styleUrl: './product-counter.component.css'
})
export class ProductCounterComponent {
counterValue: number = 0;


constructor(private counterService: CounterService) {
  
}
ngOnInit(){
this.counterService.getCounter().subscribe((response) => this.counterValue = response);}

  decrement(){
this.counterService.setCounter(this.counterValue - 1);
  }
  increment(){
    this.counterService.setCounter(this.counterValue + 1);

  }
}
