import { Component, OnInit } from '@angular/core';
import { ApiConsumoService } from '../services/api-consumo.service';
import { NavController } from '@ionic/angular';
import {Auth, getAuth} from '@angular/fire/auth';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  user: string | null | undefined = undefined;
  datos: any
  dataStorage:any
  constructor(private apiService: ApiConsumoService,
              private navCtrl: NavController,
            private useService: UserService) { }

  ngOnInit() {
    //revisar variable USER | solo revision
    const user= getAuth().currentUser
    this.user=user?.displayName

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
  Filtrar() {
    this.navCtrl.navigateRoot('/editar-perfil');
  }


}
