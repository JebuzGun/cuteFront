import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {CommunicationsProvider} from "../../providers/communications/communications";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private ubication:string = 'Anime Comic World';
  private total:number = 0;
  private productsPresented:any[]=[];
  private products:any[]=[];

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public communications: CommunicationsProvider) {

  }
  dismissModal(){
    this.viewCtrl.dismiss();
  }

  getDataInformation($event){
    let productsSale = $event;
    for(let i=0;productsSale.length>i;i++){
      for(let j=0;this.communications.products.length>j;j++){
        if(this.communications.products[j].name == productsSale[i]){
          this.products.push(this.communications.products[j]);
        }
      }
    }
  }
  addSale(){
    console.log(this.products);
  }
}
