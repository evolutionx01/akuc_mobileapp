import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }
  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };

  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };
  public TopSlideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay: true
  };
  public slideOpts = {
    initialSlide: 0,
    speed: 1000,
    // autoplay:true
    slidesPerView: 2,
  };
  Images: any[] = [
    {
      path: "/assets/images/mountains.jpg"
    },
    {
      path: "/assets/images/cities.jpg"
    },
    {
      path: "/assets/images/cherry.jpg"
    },
    {
      path: "/assets/images/mountains.jpg"
    },
  ]
  categoryList: any[]=[
    {
      url:'/assets/images/Fruites.jpg',
      name:'Fruits'
    },
    {
      url:'/assets/images/Veggies.jpeg',
      name:'Vegetables'
    }
  ]
  ItemsList: any[] = [
    {
      path: '/assets/images/mango1.png',
      name: "MangSF SD oa",
      selectedQuantity: 1,
      quantity: [
        {
          quan: '1 Kg',
          id: 1
        },
        {
          quan: '2 Kg',
          id: 2
        },
        {
          quan: '3 Kg',
          id: 3
        },
      ],
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      path: '/assets/images/mango.png',
      name: "Mangos form Andra",
      selectedQuantity: 1,
      quantity: [
        {
          quan: '1 Kg',
          id: 1
        },
        {
          quan: '2 Kg',
          id: 2
        },
        {
          quan: '3 Kg',
          id: 3
        },
      ],
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      path: '/assets/images/mango3.png',
      name: "Mangos form Andra",
      selectedQuantity: 1,
      quantity: [
        {
          quan: '1 Kg',
          id: 1
        },
        {
          quan: '2 Kg',
          id: 2
        },
        {
          quan: '3 Kg',
          id: 3
        },
      ],
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      path: '/assets/images/mango1.png',
      name: "Mangos form Andra",
      selectedQuantity: 1,
      quantity: [
        {
          quan: '1 Kg',
          id: 1
        },
        {
          quan: '2 Kg',
          id: 2
        },
        {
          quan: '3 Kg',
          id: 3
        },
      ],
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      path: '/assets/images/mango.png',
      name: "Mangos form Andra",
      selectedQuantity: 1,
      quantity: [
        {
          quan: '1 Kg',
          id: 1
        },
        {
          quan: '2 Kg',
          id: 2
        },
        {
          quan: '3 Kg',
          id: 3
        },
      ],
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      path: '/assets/images/mango3.png',
      name: "Mangos form Andra",
      selectedQuantity: 1,
      quantity: [
        {
          quan: '1 Kg',
          id: 1
        },
        {
          quan: '2 Kg',
          id: 2
        },
        {
          quan: '3 Kg',
          id: 3
        },
      ],
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      path: '/assets/images/mango1.png',
      name: "Mangos form Andra",
      selectedQuantity: 1,
      quantity: [
        {
          quan: '1 Kg',
          id: 1
        },
        {
          quan: '2 Kg',
          id: 2
        },
        {
          quan: '3 Kg',
          id: 3
        },
      ],
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      path: '/assets/images/mango.png',
      name: "Mangos form Andra",
      selectedQuantity: 1,
      quantity: [
        {
          quan: '1 Kg',
          id: 1
        },
        {
          quan: '2 Kg',
          id: 2
        },
        {
          quan: '3 Kg',
          id: 3
        },
      ],
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
    {
      path: '/assets/images/mango3.png',
      name: "Mangos form Andra",
      selectedQuantity: 1,
      quantity: [
        {
          quan: '1 Kg',
          id: 1
        },
        {
          quan: '2 Kg',
          id: 2
        },
        {
          quan: '3 Kg',
          id: 3
        },
      ],
      disPrice: 50,
      actualPrice: 60,
      count: 3
    },
  ]
  handleCount(type,i) {
    if(type=='add'){
      console.log(i);
      let t = [...this.ItemsList]
      t[i].count++
      this.ItemsList = t
    }
    else{
      console.log(i);
      let t = [...this.ItemsList]
      t[i].count--
      this.ItemsList = t
    }
    console.log(type);
    console.log(i);    
  }
  ngOnInit() {
  }

}
