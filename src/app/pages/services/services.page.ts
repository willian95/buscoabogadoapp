import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlServiceService } from '../../services/url-service.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoadingController, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  case:any
  optionArrays:any
  option:any
  step:any = 1
  url:any
  
  name:any
  rut:any
  city:any
  commune:any
  email:any
  phone:any
  description:any
  loading:any
  errors:any


  constructor(private router: Router, private urlService: UrlServiceService, private http: HttpClient, public loadingController: LoadingController, public alertController: AlertController) { 
    this.url = this.urlService.getUrl()
  }
  
  ngOnInit() {
    
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({});
    this.loading.present();
  }

  loadingDismiss(){
    this.loading.dismiss()
  }

  send(){

    this.presentLoading()

    this.http.post(this.url+"/api/service", {client_name: this.name, client_rut: this.rut, client_email: this.email, client_phone: this.phone, client_commune: this.commune, client_city: this.city, client_description: this.description, client_case: this.case, client_category:this.option}).subscribe((res:any) => {

      this.loadingDismiss()

      if(res.success == true){

        this.name = null
        this.rut = null
        this.city = null
        this.commune = null
        this.email = null
        this.phone = null
        this.description = null

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

  setCase(caseDesctiption){
    this.case = caseDesctiption

    if(this.case == "dicom"){
      this.optionArrays = this.dicom
    }

    else if(this.case == "defensa_deudores"){
      this.optionArrays = this.defensa_deudores
    }

    else if(this.case == "divorcios"){
      this.optionArrays = this.divorcios
    }

    else if(this.case == "derechos_civiles"){
      this.optionArrays = this.derechos_civiles
    }

    else if(this.case == "derecho_familiar"){
      this.optionArrays = this.derecho_familiar
    }

    else if(this.case == "derecho_laboral"){
      this.optionArrays = this.derecho_laboral
    }

    else if(this.case == "derecho_penal"){
      this.optionArrays = this.derecho_penal
    }

    else if(this.case == "defensa_comercial"){
      this.optionArrays = this.defensa_comercial
    }

    else if(this.case == "derechos_humanos"){
      this.optionArrays = this.derechos_humanos
    }

    else if(this.case == "abogados_escrituras"){
      this.optionArrays = this.abogados_escrituras
    }

    else if(this.case == "policia_local"){
      this.optionArrays = this.policia_local
    }

    else if(this.case == "derecho_tributario"){
      this.optionArrays = this.derecho_tributario
    }

    else if(this.case == "proteccion_consumidor"){
      this.optionArrays = this.proteccion_consumidor
    }

    else if(this.case == "otros_casos"){
      this.optionArrays = this.otros_casos
    }
    
    this.setStep(2)
  }

  setStep(step){
    this.step = step
  }

  setOption(option){
    this.option = option
    console.log("option", this.option)
    this.setStep(3)
  }

  cases:any = [
    {
      "name": "Divorcios",
      "description": "divorcios"  
    },
    {
      "name": "Dicom",
      "description": "dicom"  
    },
    {
      "name": "Defensa deudores",
      "description": "defensa_deudores"  
    },
    {
      "name": "Derechos civiles",
      "description": "derechos_civiles"  
    },
    {
      "name": "Derecho familiar",
      "description": "derecho_familiar"  
    },
    {
      "name": "Derecho laboral",
      "description": "derecho_laboral"  
    },
    {
      "name": "Defensa penal",
      "description": "defensa_penal"  
    },
    {
      "name": "Derecho comercial",
      "description": "defensa_comercial"  
    },
    {
      "name": "Derechos humanos",
      "description": "derechos_humanos"  
    },
    {
      "name": "Abogados escrituras",
      "description": "abogados_escrituras"  
    },
    {
      "name": "Policia local",
      "description": "policia_local"  
    },
    {
      "name": "Derecho tributario",
      "description": "derecho_tributario"  
    },
    {
      "name": "Protección al consumidor",
      "description": "proteccion_consumidor"  
    },
    {
      "name": "Otros casos",
      "description": "otros_casos"  
    },
  ]

  divorcios:any = [
    {
      "name":"Divorcio común acuerdo"
    },
    {
      "name":"Divorcio unilateral"
    },
    {
      "name":"Divorcio culposo"
    },
    {
      "name":"Otros casos"
    }
  ]

  dicom:any = [
    {
      "name":"Deudores de Casas Comerciales"
    },
    {
      "name":"Deudores de banco"
    },
    {
      "name":"Ambas"
    },
    {
      "name":"Prescripción de deudas"
    },
    {
      "name":"Deudores de banco"
    },
    {
      "name":"Otros casos"
    }
  ]

  defensa_deudores:any = [
    {
      "name":"Nulidades",
      
    },
    {
      "name":"Excepciones",
      
    },
    {
      "name":"Embargos",
     
    },
    {
      "name":"Remates",
     
    },
    {
      "name":"Tercerías",
     
    },
    {
      "name":"Defensa de demandas",
     
    },
    {
      "name":"Contestación de demandas",
     
    },
    {
      "name":"Otros casos de deudores",
     
    },
    
  ]

  derechos_civiles:any = [
    {
      "name":"Deudas y embargos",
      
    },
    {
      "name":"Defensa de deudores",
      
    },
    {
      "name":"Testamentos",
     
    },
    {
      "name":"Escrituras",
     
    },
    {
      "name":"Cambios de nombres",
     
    },
    {
      "name":"Recursos de protección en general",
     
    },
    {
      "name":"Recursos de amparo",
     
    },
    {
      "name":"Recursos de nulidad",
     
    },
    {
      "name":"Recursos de revisión",
     
    },
    {
      "name":"Estudios en derecho",
     
    },
    {
      "name":"Herencias",
     
    },
    {
      "name":"Posesiones efectivas",
     
    },
    {
      "name":"Compra y venta de propiedades",
     
    },
    {
      "name":"Cesiones de derecho",
     
    },
    {
      "name":"Cobro de honorarios",
     
    },
    {
      "name":"Cobros de Pagare",
     
    },
    {
      "name":"Otros casos de derecho civil",
     
    }
  ]

  derecho_familiar:any = [
    {
      "name":"Pensión de alimentos",
      
    },
    {
      "name":"Cuidado personal",
      
    },
    {
      "name":"Régimen comunicacional",
     
    },
    {
      "name":"Patria potestad",
     
    },
    {
      "name":"Violencia intrafamiliar",
     
    },
    {
      "name":"Declaración de interdicción",
     
    },
    {
      "name":"Juicio o reconocimiento de paternidad",
     
    },
    {
      "name":"Adopciones",
     
    },
    {
      "name":"Otros casos de familia",
     
    }
  ]

  derecho_laboral:any = [
    {
      "name":"Juicios monitorios",
      
    },
    {
      "name":"Juicios ordinarios",
      
    },
    {
      "name":"Defensa de derechos laborales",
     
    },
    {
      "name":"Accidentes de trabajo",
     
    },
    {
      "name":"Cobro de prestaciones laborales impagas",
     
    },
    {
      "name":"Despido indirecto",
     
    },
    {
      "name":"Acoso laboral",
     
    },
    {
      "name":"Constitución y asesoría de sindicatos",
     
    },
    {
      "name":"Negociación colectiva",
     
    },
    {
      "name":"Tramites ante la inspección de trabajo",
     
    },
    {
      "name":"Otros casos laborales",
     
    }
  ]

  derecho_penal:any = [
    {
      "name":"Unificación de condenas",
      
    },
    {
      "name":"Beneficios de Ley 18.216 (Pena Mixta)",
      
    },
    {
      "name":"Tramitación por causa diversa (audiencia de abonos)",
     
    },
    {
      "name":"Recurso de nulidad",
     
    },
    {
      "name":"Discriminación y delitos de odio",
     
    },
    {
      "name":"Tráfico de drogas",
     
    },
    {
      "name":"Amenaza y extorsiones (chantaje)",
     
    },
    {
      "name":"Injurias y Calumnias",
     
    },
    {
      "name":"Agresiones y riñas",
     
    },
    {
      "name":"Estafa y delitos económicos",
     
    },
    {
      "name":"Delitos informáticos",
     
    },
    {
      "name":"Homicidios",
     
    },
    {
      "name":"Robos y hurtos",
     
    },
    {
      "name":"Abuso sexual y violación",
     
    },
    {
      "name":"Otros casos penales",
     
    }
  ]

  defensa_comercial:any = [
    {
      "name":"Constitución de sociedades",
      
    },
    {
      "name":"Marcas, patentes y propiedad intelectual",
      
    },
    {
      "name":"Insolvencia y quiebras",
     
    },
    {
      "name":"Redacción o revisión de contratos",
     
    },
    {
      "name":"Inversión extranjera",
     
    },
    {
      "name":"Recursos naturales y medioambientales",
     
    },
    {
      "name":"Litigio y arbitrajes",
     
    },
    {
      "name":"Importaciones, exportaciones y derecho aduanero",
     
    },
    {
      "name":"Otros casos comerciales",
     
    }
  ]

  derechos_humanos:any = [
    {
      "name":"Solicitud asilo político",
      
    },
    {
      "name":"Lesiones por parte del estado",
      
    },
    {
      "name":"Torturas por parte del estado",
     
    },
    {
      "name":"Homicidio por parte del estado",
     
    },
    {
      "name":"Sustracción de menores por parte del estado",
     
    },
    {
      "name":"Detención ilegal por parte del estad",
     
    },
    {
      "name":"Adopciones irregulares por parte del estado",
     
    },
    {
      "name":"Violencia sexual por parte del estado",
     
    },
    {
      "name":"Otros casos de violanción a los Derechos Humanos",
     
    }
  ]

  abogados_escrituras:any = [
    {
      "name":"Escrituras de compraventa"
    },
    {
      "name":"Escrituras de cesión de derechos"
    },
    {
      "name":"Separación de bienes"
    },
    {
      "name":"Liquidación de comunidad"
    },
    {
      "name":"Escrituras Privadas"
    },
    {
      "name":"Traducciones"
    },
    {
      "name":"Testamentos"
    },
    {
      "name":"Otro tipo de escrituras"
    }
  ]

  policia_local:any = [
    {
      "name":"Accidentes de transito"
    },
    {
      "name":"Manejo en estado de ebriedad"
    },
    {
      "name":"Querellas infraccionales"
    },
    {
      "name":"Tramitacion en Juzgado de policia local"
    },
    {
      "name":"Otros casos de Policía Local"
    }
  ]

  derecho_tributario:any = [
    {
      "name":"Litigios Tributarios"
    },
    {
      "name":"Planificacion Tributaria"
    },
    {
      "name":"Otros casos de Derecho Tributario"
    }
  ]

  proteccion_consumidor:any = [
    {
      "name":"Entretención y turismo"
    },
    {
      "name":"Salud (hospitales, clínicas, etc)"
    },
    {
      "name":"Telecomunicaciones"
    },
    {
      "name":"Tiendas comerciales y retail"
    },
    {
      "name":"Inmobiliarias y constructoras"
    },
    {
      "name":"Bancos, AFPs y empresa financieras"
    },
    {
      "name":"Transporte"
    },
    {
      "name":"Servicios básicos (agua, luz, electricidad, etc.)"
    },
    {
      "name":"Aseguradoras"
    },
    {
      "name":"Comercio electrónico"
    },
    {
      "name":"Educación"
    },
    {
      "name":"Automóviles e Indumotoras"
    },
    {
      "name":"Otros Casos de Protección al consumidor"
    },
  ]

  otros_casos:any = [
    {
      "name":"Otros casos"
    }
  ]

}
