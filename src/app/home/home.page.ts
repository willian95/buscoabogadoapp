import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router:Router) {}

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
