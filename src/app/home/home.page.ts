import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }
  public TopSlideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay:true
  };
  public slideOpts = {
    initialSlide: 0,
    speed: 1000,
    // autoplay:true
    slidesPerView:2,
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
  ngOnInit() {
  }

}
