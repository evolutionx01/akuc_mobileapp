import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  Images;
  @ViewChild('slides') slides: IonSlides

  ngOnInit() {
  }
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private navParams: NavParams, private viewCtrl: ModalController) {
    let data=navParams.get('data')
    this.Images=data.Images
    
  }

  imageLoad(index) {
    console.log(index);
    this.slides.slideTo(index)
  }
  close() {
    this.viewCtrl.dismiss({
      Size: '100',
      Spicy: 'Splicy',
      TotalPrice: '750'
    })
  }

}
