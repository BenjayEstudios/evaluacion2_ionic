import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  cuentas: any[] = [];
  nombreUsuario: string = '';

  constructor(
    private navCtrl: NavController,
    private http: HttpClient
  ) { }

  ngOnInit() {
    
    this.cuentasDuoc().subscribe(res => {
      this.cuentas = res.data;
      console.log("Cuentas cargadas:", this.cuentas);
      this.traerNombre();
    });
    
  }

  traerNombre() {
    const userID = localStorage.getItem("userID");
    if (userID) {
      const cuenta = this.cuentas.find(cuenta =>
        cuenta['ID USUARIO'] === Number(userID)
      );

      if (cuenta) {
        console.log("Usuario encontrado:", cuenta);
        this.nombreUsuario = cuenta['USUARIO'];
      } else {
        console.log("Usuario no encontrado.");
      }
    } else {
      console.log("No se encontró el ID del usuario en localStorage.");
    }
  }

  EditarPerfil() {
    this.navCtrl.navigateRoot('/editar-perfil');
  }
  CompartirPerfil(){
    this.navCtrl.navigateRoot('/home')
  }

  cuentasDuoc() {
    return this.http
      .get('../../assets/files/cuentasDuoc.json')
      .pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
      );
  }

  
}
