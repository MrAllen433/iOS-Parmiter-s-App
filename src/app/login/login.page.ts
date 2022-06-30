import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router, public toastController:ToastController, private nativeStorage: NativeStorage) { }

  ngOnInit() {

    this.nativeStorage.getItem('verified')
  .then(
    data => {console.log(data), this.verified = data},
    error => console.error(error)
  )
  if (this.verified== true){
    this.route.navigate(['/home']);
  }

  }
  entry:string=""
  pin=""
  verified=false;
  
  //To be used to present the user with a message telling them they have got the PIN incorrect
  async incorrectPIN() {
    const toast = await this.toastController.create({
      message: 'The PIN you entered was incorrect.',
      duration: 2000
    });
    toast.present();
  }

  //Function used to check whether the pin value entered by user is correct, If not an alert is presented to the user telling them they did not enter the correct value
  button(){
    if (this.entry == "1995"){
      this.nativeStorage.setItem('verified', true)
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
  this.route.navigate(['/home']);
    }
    else{
      this.incorrectPIN()
      console.log("You have been denied entry!")
    }

    
  }
  
  

}