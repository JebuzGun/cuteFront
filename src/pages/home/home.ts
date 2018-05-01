import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  find : string = "";
  product : string = "Nombre producto";
  quantity : number = 0;

  constructor(public navCtrl: NavController) {

  }
  onInput(event){
    console.log(event);
  }
}
