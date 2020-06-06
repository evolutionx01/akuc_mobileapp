import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

   public total_list_items:any =25;

  
   public  productlist :any[]=[
    {
      "imageUrl":"/assets/images/mango.png",
      "brandName":"Fresho",
      "branditem":"Banganapalli",
      "mrpPrices":"15.50",
      "offerPrices":"10.50",
      "quantitycol":[{
        "itemCount":1
      },
      {
        "itemCount":3
     },
     {
      "itemCount":5
     }]   
    },
    {
      "imageUrl":"/assets/images/mango3.png",
      "brandName":"Fresho",
      "branditem":"Mangoes",
      "mrpPrices":"15.50",
      "offerPrices":"10.50",
      "quantitycol":[{
        "itemCount":1
      },
      {
        "itemCount":3
     },
     {
      "itemCount":5
     }]   
    },
    
    {
      "imageUrl":"/assets/images/mango1.png",
      "brandName":"Fresho",
      "branditem":"Mangoes",
      "mrpPrices":"15.50",
      "offerPrices":"10.50",
      "quantitycol":[{
        "itemCount":1
      },
      {
        "itemCount":3
     },
     {
      "itemCount":5
     }]   
    },
    {
      "imageUrl":"/assets/images/mango3.png",
      "brandName":"Fresho",
      "branditem":"Mangoes",
      "mrpPrices":"15.50",
      "offerPrices":"10.50",
      "quantitycol":[{
        "itemCount":1
      },
      {
        "itemCount":3
     },
     {
      "itemCount":5
     }]   
    },
    {
      "imageUrl":"/assets/images/mango.png",
      "brandName":"Fresho",
      "branditem":"Mangoes",
      "mrpPrices":"15.50",
      "offerPrices":"10.50",
      "quantitycol":[{
        "itemCount":1
      },
      {
        "itemCount":3
     },
     {
      "itemCount":5
     }]   
    },

   ]

  constructor() { }

  ngOnInit() {
  }

  public cartCount: number = 0;
  
  handleCart(type) {
    if (type === "add") {
      this.cartCount++
    }
    else {
      this.cartCount--
    }
  }

}
