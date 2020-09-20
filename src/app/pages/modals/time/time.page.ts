import { Component, OnInit, Input } from '@angular/core';
import {ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UrlServiceService } from '../../../services/url-service.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})

export class TimePage implements OnInit {
  
  @Input() date: string;
  email:any
  name:any
  phone:any
  time:any

  url:any
  loading:any
  errors:any

  constructor(private modalController:ModalController, private router: Router, private urlService: UrlServiceService, private http: HttpClient, public loadingController: LoadingController, public alertController: AlertController) { 
    this.url = this.urlService.getUrl()
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss()
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({});
    this.loading.present();
  }

  loadingDismiss(){
    this.loading.dismiss()
  }


  async presentAlert(message, success) {
    const alert = await this.alertController.create({
      message: message,
      buttons: [ 
        {
          text: 'Ok!',
          handler: () => {
            if(success == true){
              this.router.navigateByUrl("/")
            }
          }
        }
      ]
    });

    await alert.present();
  }

  send(){

    this.presentLoading()

    this.http.post(this.url+"/api/appoinment", {name: this.name, email: this.email, phone: this.phone}).subscribe((res:any) => {

      this.loadingDismiss()

      if(res.success == true){

        this.name = null
        this.email = null
        this.phone = null

        this.presentAlert(res.msg, res.success)

      }else{
        this.presentAlert(res.msg, res.success)
      }

    }, 
    (errorResponse: HttpErrorResponse) => {
      this.loadingDismiss()
      
      if (errorResponse.error) {

        if (errorResponse.error.errors) {
          
          this.presentAlert("Hay algunos campos que debe revisar", false)
          this.errors = errorResponse.error.errors
          
    
        }
    
      }

    })

  }

}
