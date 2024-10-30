import { Component, OnInit } from '@angular/core';
import { ApiConsumoService } from '../services/api-consumo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  datos: any
  dataStorage:any
  constructor(private apiService: ApiConsumoService) { }

  ngOnInit() {

    this.dataStorage=localStorage.getItem('data')


    if(this.dataStorage){
      console.log('datos desde localstorage')
      this.datos=JSON.parse(this.dataStorage)

    }else{

      this.apiService.obtenerDatos().subscribe((Info) => {
      console.log('datos desde API')
        console.log(Info)
        this.datos = Info
        localStorage.setItem('data',JSON.stringify(this.datos))

  
  
      })


    }
    

  }



}
