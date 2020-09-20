import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  test:any;
  
  constructor(private router:Router) {}

  ngOnInit(){
    //this.test = this.domSanitizer.bypassSecurityTrustHtml("https://sandbox.flow.cl/app/web/pay.php?token=3E16D6B24426FF0EFE7728F9FB21CB90F15F284P")
  }

  goToServices(){

    this.router.navigateByUrl("/services")

  }

  goToLinks(){

    this.router.navigateByUrl("/links")

  }

  goToDicom(){
    this.router.navigateByUrl("/dicom")
  }

  goToContact(){
    this.router.navigateByUrl("/contact")
  }

  goToLawyerContact(){
    this.router.navigateByUrl("/lawyer-contact")
  }

  goToLawyers(){
    this.router.navigateByUrl("/lawyers")
  }


  /*goToServices(){
    this.router.navigateByUrl("/services")
  }*/

}
