import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  // counter: number = 0;
  //counterSubscription: Subscription = new Subscription;//Not Required if we use variable of type Observable with $

  counter$?: Observable<CounterState>;

  constructor(private store: Store<{ counter:CounterState }>) {}

  ngOnDestroy(): void {
    //  if(this.counterSubscription){
    //   this.counterSubscription.unsubscribe();
    //  }
  }

  ngOnInit() {
    // this.counterSubscription = this.store.select('counter').subscribe((res) => {
    //   this.counter = res.counter;
    // });

    //OR

    this.counter$ = this.store.select('counter');
  }
}
