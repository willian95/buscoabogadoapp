import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlServiceService } from '../../services/url-service.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController} from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { CheckoutPage } from '../../modals/checkout/checkout.page';

@Component({
  selector: 'app-dicom',
  templateUrl: './dicom.page.html',
  styleUrls: ['./dicom.page.scss'],
})
export class DicomPage implements OnInit {

  name:any
  rut:any
  email:any
  phone:any
  url:any
  iframe:any=null
  showFrame:any=false

  constructor(private router: Router, private urlService: UrlServiceService, private http: HttpClient, public loadingController: LoadingController, public alertController: AlertController, public domSanitizer:DomSanitizer, public modalController: ModalController) { 
    this.url = this.urlService.getUrl()
  }

  ngOnInit() {
  }

  checkout(){

    this.http.post(this.url+"/dicom", {name: this.name, rut: this.rut, email: this.email, phone: this.phone, url: this.url}).subscribe((res:any) => {

      let result = JSON.parse(res)
      this.presentModal(result.url+"?token="+result.token)
      //this.iframe = this.domSanitizer.bypassSecurityTrustResourceUrl(result.url+"?token="+result.token)
      //this.showFrame = true

    })

  }

  async presentModal(url) {
    const modal = await this.modalController.create({
      component: CheckoutPage,
      componentProps: {
        "url": url
      }
    });
    return await modal.present();
  }

}
