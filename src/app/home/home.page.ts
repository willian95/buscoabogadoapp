import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private router:Router) {}

  goToLawyers(){

    this.router.navigateByUrl("/lawyers")

  }

  goToLinks(){

    this.router.navigateByUrl("/links")

  }

  goToContact(){
    this.router.navigateByUrl("/contact")
  }

  goToLawyerContact(){
    this.router.navigateByUrl("/lawyer-contact")
  }

  goToServices(){
    this.router.navigateByUrl("/services")
  }

}
