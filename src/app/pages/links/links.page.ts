import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
})
export class LinksPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  goToLink(link){
    this.iab.create(link, '_system');
  }

}
