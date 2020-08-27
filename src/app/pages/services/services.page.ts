import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: -40,
    slidesPerView: 2,
  };

  constructor() { }

  ngOnInit() {
  }

}
