import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TestModule } from '../test/test.module';  // Importa TestModule aquí
import { ApiConsumoService } from '../services/api-consumo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TestModule  // Importa TestModule para usar MenuTabsComponent
  ],
  providers:[ApiConsumoService],
  declarations: [HomePage]
})
export class HomePageModule {}
