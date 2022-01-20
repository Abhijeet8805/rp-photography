import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';





@Component({
  selector: 'app-shoot1',
  templateUrl: './shoot1.component.html',
  styleUrls: ['./shoot1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Shoot1Component implements OnInit {

  items!: GalleryItem[];





  
  constructor(public gallery: Gallery,) {


  }


  ngOnInit() {


   
    this.items = data.map(item =>
      new ImageItem({ thumb: item.previewUrl })
    );

    
    this.withCustomGalleryConfig();


  }

  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }

  
  withCustomGalleryConfig() {

    
    const lightboxGalleryRef = this.gallery.ref('anotherLightbox');

   
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    
    lightboxGalleryRef.load(this.items);
  }
}

const data: { previewUrl: string; }[] = [

]

var dataUrl1;
var dataUrl2;
var dataUrl3;
var dataUrl4;
var dataUrl5;
var dataUrl6;
var dataUrl7;

if (window.location.port === "4200") {
  dataUrl1 = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/portfolio/shoot1";
  dataUrl2 = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/portfolio/shoot2";
  dataUrl3 = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/portfolio/shoot3";
  dataUrl4 = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/portfolio/shoot4";
  dataUrl5 = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/portfolio/shoot5";
  dataUrl6 = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/portfolio/shoot6";
  dataUrl7 = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/portfolio/shoot7";

} else {
  dataUrl1 = window.location.protocol + "//" + window.location.hostname + "/portfolio/shoot1";
  dataUrl2 = window.location.protocol + "//" + window.location.hostname + "/portfolio/shoot2";
  dataUrl3 = window.location.protocol + "//" + window.location.hostname + "/portfolio/shoot3";
  dataUrl4 = window.location.protocol + "//" + window.location.hostname + "/portfolio/shoot4";
  dataUrl5 = window.location.protocol + "//" + window.location.hostname + "/portfolio/shoot5";
  dataUrl6 = window.location.protocol + "//" + window.location.hostname + "/portfolio/shoot6";
  dataUrl7 = window.location.protocol + "//" + window.location.hostname + "/portfolio/shoot7";

}

if (window.location.href === dataUrl1) {

  for (var i = 1; i < 6; i++) {
    data.push({
      previewUrl: "/../../assets/image1/img" + i + ".jpeg"
    })
  }

} else if (window.location.href === dataUrl2) {
  for (var i = 1; i < 4; i++) {
    data.push({
      previewUrl: "/../../assets/image2/img" + i + ".jpeg"
    })
  }
} else if (window.location.href === dataUrl3) {
  for (var i = 1; i < 6; i++) {
    data.push({
      previewUrl: "/../../assets/image3/img" + i + ".jpeg"
    })
  }
} else if (window.location.href === dataUrl4) {
  for (var i = 1; i < 12; i++) {
    data.push({
      previewUrl: "/../../assets/image4/img" + i + ".jpeg"
    })
  }
} else if (window.location.href === dataUrl5) {
  for (var i = 1; i < 10; i++) {
    data.push({
      previewUrl: "/../../assets/image5/img" + i + ".jpeg"
    })
  }
} else if (window.location.href === dataUrl6) {
  for (var i = 1; i < 3; i++) {
    data.push({
      previewUrl: "/../../assets/image6/img" + i + ".jpeg"
    })
  }
} else if (window.location.href === dataUrl7) {
  for (var i = 1; i < 3; i++) {
    data.push({
      previewUrl: "/../../assets/image7/img" + i + ".jpeg"
    })
  }
}


