import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  cuentas: any[] = [];
  usuario: string = '';
  correoElectronico: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private http: HttpClient) { }

  ngOnInit() {
    this.cuentasDuoc().subscribe(res => {
      this.cuentas = res.data;  
      console.log("Cuentas cargadas:", this.cuentas);
    });
  }
  crearCuenta(){
    /////////////////////////////////////////////////////////////////
    /////////     SE VALIDA SI ALGUN CAMPO ESTA VACIO       /////////
    /////////////////////////////////////////////////////////////////
    
    if (!this.usuario || !this.correoElectronico || !this.password) {
      alert('Complete todos los campos');
      return;
    }

    /////////////////////////////////////////////////////////////////
    /////////       SE VALIDA SI EL USUARIO EXISTE          /////////
    /////////////////////////////////////////////////////////////////
    const cuentaValida = this.cuentas.find(cuenta =>
      cuenta['USUARIO'] === this.usuario || cuenta['CORREO ELECTRONICO'].toUpperCase() === this.correoElectronico.toUpperCase()
    );
    if (cuentaValida) {
      alert('Usuario y/o Correo electronico ya usados');
    } else {
      this.navCtrl.navigateRoot(['/home']);
    }
    console.log('FUNCIONA')
    //this.navCtrl.navigateRoot('/home')
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
