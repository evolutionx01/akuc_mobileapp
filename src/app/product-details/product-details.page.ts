import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageModalPage } from './image-modal/image-modal.page';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  constructor(private fb: FormBuilder, private modalController: ModalController) { }

  ngOnInit() {
  }
  // public form:FormGroup
  @ViewChild('slides') slides: IonSlides
  public selectedPack = 1;
  Images: any[] = [
    {
      path: "/assets/images/mango.png"
    },
    {
      path: "/assets/images/mango1.png"
    },
    {
      path: "/assets/images/mango3.png"
    }
  ]
  packetOptions = [
    {
      quantity: "1 L",
      price: "129",
      id: 1
    },
    {
      quantity: "2 L",
      price: "229",
      id: 2
    },
    {
      quantity: "3 L",
      price: "329",
      id: 3
    }
  ]

  selectPack(data) {
    console.log(data);

  }
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  imageLoad(index) {
    console.log(index);
    this.slides.slideTo(index)
  }

  public contents = [
    {
      name: "About page",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.",
      show: false
    },
    {
      name: "Product",
      content: `Prasads srem ipsum doehicula lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed ac vehicula loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem`,
      show: false
    },
  ]

  toggleContent(index) {
    console.log(index);
    this.contents[index].show = !this.contents[index].show
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
  async openModal() {
    let data = {
      Images: this.Images,
    }
    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        data:data
      }
    });
    modal.onDidDismiss().then(data=>{
      console.log(data)
      })
    return await modal.present();
  }
}
