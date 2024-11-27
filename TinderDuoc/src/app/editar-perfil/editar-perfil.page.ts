import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  profilePhoto: string | undefined;
  constructor(public photoService: PhotoService) {
   }

  async ngOnInit() {
    
    
  }

  addPhotoToGallery(){
    this.photoService.AgregarPhotoGaleria();
  }

}
