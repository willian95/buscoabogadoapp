import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lawyers',
  templateUrl: './lawyers.page.html',
  styleUrls: ['./lawyers.page.scss'],
})
export class LawyersPage implements OnInit {

  case:any
  optionArrays:any
  option:any
  step:any = 1
  cases:any = [
    {
      "name": "Dicom",
      "description": "dicom"  
    },
    {
      "name": "Divorcios",
      "description": "divorcios"  
    },
    {
      "name": "Derechos Civiles",
      "description": "derechos_civiles"  
    }
  ]

  dicom:any = [
    {
      "name":"Option 1",
      "description":"option1"
    },
    {
      "name":"Option 2",
      "description":"option2"
    },
    {
      "name":"Option 3",
      "description":"option3"
    }
  ]

  divorcios:any = [
    {
      "name":"Option 1",
      "description":"option1"
    },
    {
      "name":"Option 2",
      "description":"option2"
    },
    {
      "name":"Option 3",
      "description":"option3"
    }
  ]

  derechos_civiles:any = [
    {
      "name":"Option 1",
      "description":"option1"
    },
    {
      "name":"Option 2",
      "description":"option2"
    },
    {
      "name":"Option 3",
      "description":"option3"
    }
  ]

  constructor() { }
  
  ngOnInit() {
  }

  setCase(caseDesctiption){
    this.case = caseDesctiption

    if(this.case == "dicom"){
      this.optionArrays = this.dicom
    }

    else if(this.case == "derechos_civiles"){
      this.optionArrays = this.derechos_civiles
    }

    else if(this.case == "divorcios"){
      this.optionArrays = this.divorcios
    }

    
    this.setStep(2)
  }

  setStep(step){
    this.step = step
  }

  setOption(option){
    this.option = option
    this.setStep(3)
  }


}
