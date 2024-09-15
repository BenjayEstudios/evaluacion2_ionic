import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { TestModule } from '../test/test.module';  // Importa TestModule aquí

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TestModule  // Importa TestModule para usar MenuTabsComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
