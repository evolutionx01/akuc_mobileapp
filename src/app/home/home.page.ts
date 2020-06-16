import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
   };

   topStories = [
     {image : 'https://picsum.photos/id/1/200/300',
    title: 'heage'},
     {image : 'https://picsum.photos/id/10/200/300',
     title: 'heage'},
     {image : 'https://picsum.photos/id/100/200/300',
     title: 'heage'}
    ]

  constructor() { }

  ngOnInit() {
  }

}
