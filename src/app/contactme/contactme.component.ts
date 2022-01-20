import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const sr = ScrollReveal({
      distance: '130px',
      duration: 2800,

    })
    sr.reveal(`.contact__info`, {
      origin: 'right',
      interval: 1000,

    })
    sr.reveal(`.contact__form`, {
      origin: 'left',
      interval: 1000,

    })
  }

}
