import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {


  formReg: FormGroup
  cuentas: any[] = [];
  usuario: string = '';
  correoElectronico: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private http: HttpClient,
    private userService: UserService) {
    this.formReg = new FormGroup({
      user: new FormControl(),
      email: new FormControl(),
      password: new FormControl()

    })
  }

  ngOnInit() {
    this.cuentasDuoc().subscribe(res => {
      this.cuentas = res.data;
      console.log("Cuentas cargadas:", this.cuentas);
    });
  }


  onSubmit() {
    
    const cuentaValida = this.cuentas.find(cuenta =>
      cuenta['USUARIO'] === this.usuario || cuenta['CORREO ELECTRONICO'].toUpperCase() === this.correoElectronico.toUpperCase()
    );
    
    /////////     SE VALIDA SI ALGUN CAMPO ESTA VACIO       /////////
    if (!this.usuario || !this.correoElectronico || !this.password) {
      alert('Complete todos los campos');
      return;
    }

    /////////       SE VALIDA SI EL USUARIO EXISTE          /////////
    else if (!this.correoElectronico.endsWith('@duocuc.cl')) {
      alert('Correo incorrecto, debe terminar en duocuc.cl');
      return;

    }else if (cuentaValida) {
      alert('Usuario y/o Correo electronico ya usados');

    }
    
    
    else {

      const { email, password } = this.formReg.value;
      this.userService.register({ email, password })
        .then(response => {
          console.log(response)
        this.navCtrl.navigateRoot(['/home']);

        })
        .catch(error => console.log(error));
    }
  }



  crearCuenta() {
    

    console.log('FUNCIONA')
    //this.navCtrl.navigateRoot('/home')
  }

  
  cuentasDuoc() {

    return this.http
      .get('../../assets/files/cuentasDuoc.json')
      .pipe(
        map((res: any) => {
          console.log(res)
          return res;
        })
      )
  }
}
