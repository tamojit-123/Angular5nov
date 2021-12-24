import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  orders: Array<any> = [
    {
      orderId: 101,
      customerID: 1,
      productID: 13456,
      quantity: 1,
      orderDate: '20/11/2021'
    },
    {
      orderId: 102,
      customerID: 2,
      productID: 5678833,
      quantity: 2,
      orderDate: '21/11/2021'
    },
    {
      orderId: 103,
      customerID: 3,
      productID: 567833,
      quantity: 1,
      orderDate: '22/11/2021'
    },
    {
      orderId: 104,
      customerID: 5,
      quantity: 1,
      productID: 332353,
      orderDate: '21/11/2021'
    }
  ];

}
