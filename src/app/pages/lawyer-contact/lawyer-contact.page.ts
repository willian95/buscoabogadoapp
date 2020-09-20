import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlServiceService } from '../../services/url-service.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-lawyer-contact',
  templateUrl: './lawyer-contact.page.html',
  styleUrls: ['./lawyer-contact.page.scss'],
})
export class LawyerContactPage implements OnInit {

  url:any
  loading:any
  errors:any

  name:any
  rut:any
  email:any
  phone:any
  specialty:any
  graduated_date:any

  constructor(private router: Router, private urlService: UrlServiceService, private http: HttpClient, public loadingController: LoadingController, public alertController: AlertController) { 

    this.url = this.urlService.getUrl()

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({});
    this.loading.present();
  }

  loadingDismiss(){
    this.loading.dismiss()
  }

  ngOnInit() {
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

    this.http.post(this.url+"/api/lawyer-contact", {name: this.name, rut: this.rut, email: this.email, phone: this.phone, specialty: this.specialty, graduated_date: this.graduated_date}).subscribe((res:any) => {

      this.loadingDismiss()

      if(res.success == true){

        this.name = null
        this.rut  = null
        this.email = null
        this.phone = null
        this.specialty = null
        this.graduated_date = null

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
