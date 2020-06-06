import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.page.html',
  styleUrls: ['./basket-list.page.scss'],
})
export class BasketListPage implements OnInit {

  constructor() { }
  ngOnInit() {
    this.handleTotal();
  }
  public totalPrice: number = 0;
  public totalDiscount: number = 0;
  public items: Array<any> = [
    {
      url: '/assets/images/mango1.png',
      name: 'Fresh Mango 1',
      quantity: '1 kg',
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      url: '/assets/images/mango.png',
      name: 'Fresh Mango 2',
      quantity: '0.5 kg',
      disPrice: 80,
      actualPrice: 90,
      count: 3
    },
    {
      url: '/assets/images/mango3.png',
      name: 'Fresh Mango 3',
      quantity: '2 kg',
      disPrice: 65,
      actualPrice: 75,
      count: 3
    },
    {
      url: '/assets/images/mango1.png',
      name: 'Fresh Mango 1',
      quantity: '1 kg',
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      url: '/assets/images/mango.png',
      name: 'Fresh Mango 2',
      quantity: '0.5 kg',
      disPrice: 80,
      actualPrice: 90,
      count: 3
    },
    {
      url: '/assets/images/mango3.png',
      name: 'Fresh Mango 3',
      quantity: '2 kg',
      disPrice: 65,
      actualPrice: 75,
      count: 3
    },
    {
      url: '/assets/images/mango1.png',
      name: 'Fresh Mango 1',
      quantity: '1 kg',
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      url: '/assets/images/mango.png',
      name: 'Fresh Mango 2',
      quantity: '0.5 kg',
      disPrice: 80,
      actualPrice: 90,
      count: 3
    },
    {
      url: '/assets/images/mango3.png',
      name: 'Fresh Mango 3',
      quantity: '2 kg',
      disPrice: 65,
      actualPrice: 75,
      count: 3
    },
  ]
  
  removeItem(i) {
    console.log(i);
    let t = [...this.items]
    t[i].count--
    this.items = t
    if (this.items[i].count === 0) {
      this.items.splice(i, 1)
    }
    this.handleTotal()
  }

  addItem(i) {
    console.log(i);
    let t = [...this.items]
    t[i].count++
    this.items = t
    this.handleTotal()
  }

  handleTotal() {
    var t1 = 0;
    var t2 = 0
    for (let i = 0; i < this.items.length; i++) {
      t1 = t1 + this.items[i].actualPrice * this.items[i].count
      t2 = t2 + (this.items[i].actualPrice - this.items[i].disPrice) * this.items[i].count
    }
    this.totalPrice = t1;
    this.totalDiscount = t2;
  }
}
