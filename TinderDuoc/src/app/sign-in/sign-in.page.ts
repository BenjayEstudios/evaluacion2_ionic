import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  usuario: string = '';
  password: string = '';
  cuentas: any[] = [];

  constructor(
    public navCtrl: NavController,
    public http: HttpClient) {}
  

  ngOnInit() {
    this.cuentasDuoc().subscribe(res => {
      this.cuentas = res.data;  
      console.log("Cuentas cargadas:", this.cuentas);
    });

  }
  IniciarSesion(){
    const cuentaValida = this.cuentas.find(cuenta =>
      cuenta['USUARIO'] === this.usuario && cuenta['CONTRASENA'] === this.password
    );

    if (!cuentaValida) {
      alert('USUARIO O CONTRASEÑA ERRONEAS');
    } else {
      this.navCtrl.navigateRoot(['/home']);
    }
  }
  

  cuentasDuoc(){

    return this.http
    .get('../../assets/files/cuentasDuoc.json')
    .pipe(
      map((res:any) =>{
        console.log(res)
        return res;
      })
    )
  }

}
