import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GoogleMap, MapType, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
//import { GoogleMaps, GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';
import { Geolocation, GeolocationPlugin} from '@capacitor/geolocation';
//import { GoogleMap, Marker } from '@capacitor-community/google-maps';

declare var google: any;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 
  constructor() {}

  ngOnInit() {

  }

}
