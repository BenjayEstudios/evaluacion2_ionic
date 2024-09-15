import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  usuario: string = '';
  password: string = '';

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  IniciarSesion(){
    console.log(this.usuario)
    console.log(this.password)
    if(this.usuario != 'ADMIN' || this.password != 'ADMIN'){
      alert('USUARIO O CONTRASEÑA ERRONEAS')

    }else{
      this.navCtrl.navigateRoot(['/home'])

    }
  }
}
