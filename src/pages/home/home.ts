import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommunicationsProvider } from "../../providers/communications/communications";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private products:any[]=[];

  constructor(public navCtrl: NavController,
              private communications: CommunicationsProvider) {

    communications.getProducts().then((data:any)=>{
      this.products = data;
    }).catch((err)=>{console.log(err)});
  }
  onInput(event){
  }
}
