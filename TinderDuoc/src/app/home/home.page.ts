import { Component, OnInit } from '@angular/core';
import { ApiConsumoService } from '../services/api-consumo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: any
  dataStorage:any
  constructor(private apiService: ApiConsumoService) { }

  ngOnInit() {

    this.dataStorage=localStorage.getItem('data')


    if(this.dataStorage){
      console.log('datos desde localstorage')
      this.items=JSON.parse(this.dataStorage)

    }else{

      this.apiService.obtenerDatos().subscribe((Root) => {
      console.log('datos desde API')
        console.log(Root)
        this.items = Root
        localStorage.setItem('data',JSON.stringify(this.items))

  
  
      })


    }
    

  }



}
