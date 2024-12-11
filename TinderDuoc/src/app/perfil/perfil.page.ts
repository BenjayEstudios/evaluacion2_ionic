import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PhotoService } from '../services/photo.service';
import { UserService } from '../services/user.service';
import { Auth, getAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  cuentas: any[] = [];
  user: string | null | undefined;

  nombreUsuario: string = '';
  nombre: string = '';
  apellido: string = '';
  descripcion: string = '';
  edad: string = '';

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    public photoService: PhotoService,
  ) { }

  ngOnInit() {

    const user = getAuth().currentUser
    this.user = user?.displayName

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
        this.nombre = cuenta['NOMBRE']
        this.apellido = cuenta['APELLIDO']
        this.descripcion = cuenta['DESCRIPCION']
        this.edad = cuenta['EDAD']
      }
    }
  }

  EditarPerfil() {
    this.navCtrl.navigateRoot('/editar-perfil');
  }
  CompartirPerfil() {
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
