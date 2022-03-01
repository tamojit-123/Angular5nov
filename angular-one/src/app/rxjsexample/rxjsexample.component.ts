import {Component, OnInit} from '@angular/core';
import {filter, interval, Observable, of, reduce, take} from "rxjs";

@Component({
  selector: 'app-rxjsexample',
  templateUrl: './rxjsexample.component.html',
  styleUrls: ['./rxjsexample.component.css']
})
export class RxjsexampleComponent implements OnInit {

  constructor() {
    let test = of(1, 2, 3, 4, 5, 6, 7, 8);
    //pipe() used for chaining
    let case1 = test.pipe(
      //add all the even number
      filter(x => x % 2 === 0),
      reduce((acc, one) => acc + one, 0)
    )
    case1.subscribe(x => console.log(x));
  }

  ngOnInit(): void {

    const number = interval(1000);
    const takeOne = number.pipe(take(3));
    takeOne.subscribe(value => console.log(value));

    const simpleObserver = new Observable((observer) => {
      observer.next(10)
      observer.next(20)
      observer.next(30)
      observer.next("hello")
      observer.complete()
    })
    simpleObserver.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      }
    });

    const observableOne = new Observable(function subscribe(subscriber) {
      const id = setTimeout(() => {
        subscriber.next("hello")
      }, 1000)
    })

    observableOne.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      }
    });

    const observableTwo = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    observableTwo.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      }
    });

  }

}
