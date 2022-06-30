import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import {LocationAccuracy} from '@awesome-cordova-plugins/location-accuracy/ngx';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  pinDrop=false;
  timetest: any;
  latitude: any;
  longitude: any;
  constructor(private geolocation: Geolocation
    ) { 
      
    }

  ngOnInit() {
    this.checkCoords()
  }
    
//this.checkPermission()

   checkCoords(){
     console.log("HELLO")
    //Checks whether the application has permission to use the GPS function on the phone
  //this.checkGPSPermission()
  //Acquires the longitude and latitude values to figure out whether to display the Sign-In form
  console.log("A")
  this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude = resp.coords.latitude
    this.longitude = resp.coords.longitude
    console.log("Inside", this.longitude)
    this.checkPermission(this.longitude, this.latitude)
    // resp.coords.longitude
   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    //data.coords.latitude
    // data.coords.longitude
   });
   }
  checkPermission(longitude, latitude){
    console.log("Longitude: ", longitude)
    console.log("Latitude: ", latitude)
    if((latitude < 51.705012 && latitude > 51.701475) && (longitude > -0.392391 && longitude < -0.385907)){
      this.pinDrop == true
      console.log("Within the area")
    }
    else{
      this.pinDrop == false
      console.log("Not in area")
    }
  }

}
