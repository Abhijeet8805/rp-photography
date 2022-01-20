import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { EffectCoverflow, Pagination, Swiper } from "swiper";


// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss',
  ]
})
export class HomepageComponent implements OnInit {
  images: string[] = [];
  url: any;
  constructor() {



  }


  ngOnInit(): void {
    const sr = ScrollReveal({
      distance: '130px',
      duration: 2800,

    })


    sr.reveal(`.home__data`, {
      origin: 'left',
      interval: 100,

    })
    let swiper = new Swiper(".discover__container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 32,
      coverflowEffect: {
        rotate: 0,
      },

    })
   
  }

}
