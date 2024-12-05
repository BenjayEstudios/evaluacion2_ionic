import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';

import { HomePage } from './home.page';
// import { ApiConsumoService } from '../services/api-consumo.service';
import { of } from 'rxjs';
import { ApiConsumoService } from '../services/api-consumo.service';
import { mock } from '../mock/apiConsumo.mock';


describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  // 


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [{
        provide:ApiConsumoService, useValue:mock
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
