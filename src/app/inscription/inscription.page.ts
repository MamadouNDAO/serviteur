import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  base64:string="../../assets/placeholder.png"
  constructor() { }

  ngOnInit() {
  }

  pickImageFromGallery(){
    var options:ImageOptions={
      source:CameraSource.Camera,
      resultType:CameraResultType.DataUrl
    }

    Camera.getPhoto(options).then((result)=>{
      this.base64 = result.dataUrl as string;
    })
  }

}
