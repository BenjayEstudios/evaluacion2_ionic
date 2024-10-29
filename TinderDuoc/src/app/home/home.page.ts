import { Component, OnInit } from '@angular/core';
import { ApiConsumoService } from '../services/api-consumo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: any
  constructor(private apiService: ApiConsumoService) { }

  ngOnInit() {

    this.apiService.obtenerDatos().subscribe((Root) => {
      console.log(Root)
      this.items = Root


    })

  }



}
